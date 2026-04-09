import { Company } from "@/types/company";

export type SpiderMetric = {
  key: keyof Company;
  label: string;
  invert?: boolean; // lower is better
};

export const SPIDER_METRICS: SpiderMetric[] = [
  {
    key: "netProfitMargin",
    label: "Net Margin",
  },
  {
    key: "returnOnEquity",
    label: "ROE",
  },
  {
    key: "returnOnAssets",
    label: "ROA",
  },
  {
    key: "assetTurnover",
    label: "Asset Turnover",
  },
  {
    key: "debtToEquity",
    label: "Debt to Equity",
    invert: true,
  },
  {
    key: "debtToAssets",
    label: "Debt to Assets",
    invert: true,
  },
  {
    key: "cashRatio",
    label: "Cash Ratio",
  },
  {
    key: "priceToBook",
    label: "Price to Book",
    invert: true,
  },
];

export function getCompanySpiderRaw(company: Company) {
  return SPIDER_METRICS.map((metric) => ({
    label: metric.label,
    value: company[metric.key] as number,
    invert: metric.invert ?? false,
  }));
}

type RawSpiderValue = {
  label: string;
  value: number;
  invert: boolean;
};

export function normalizeSpiderData(
  rawData: RawSpiderValue[],
  allCompanies: Company[],
) {
  return rawData.map((metric) => {
    const values = allCompanies.map(
      (c) =>
        c[SPIDER_METRICS.find((m) => m.label === metric.label)!.key] as number,
    );

    const min = Math.min(...values);
    const max = Math.max(...values);

    let score = max === min ? 100 : ((metric.value - min) / (max - min)) * 100;

    if (metric.invert) {
      score = 100 - score;
    }

    return {
      label: metric.label,
      score: Math.round(score),
    };
  });
}

export function getCompanySpiderScores(company: Company, companies: Company[]) {
  const raw = getCompanySpiderRaw(company);
  return normalizeSpiderData(raw, companies);
}
