import { Company } from "@/types/company";
import { formatCurrencyCompact, formatPercent } from "@/utils/format";

export type FinancialRow = {
  label: string;
  value: string;
};

export function getCompanyFinancialRows(company: Company): FinancialRow[] {
  return [
    // Dates
    { label: "Listing Date", value: company.listingDate },
    { label: "Annual Month", value: company.annualMonth },
    { label: "Report Date", value: company.reportDate },

    // Income Statement
    {
      label: "Operating Revenue",
      value: formatCurrencyCompact(company.operatingRevenue),
    },
    {
      label: "Profit Before Tax",
      value: formatCurrencyCompact(company.profitBeforeTax),
    },
    {
      label: "Net Profit",
      value: formatCurrencyCompact(company.netProfit),
    },

    // Balance Sheet
    {
      label: "Total Assets",
      value: formatCurrencyCompact(company.totalAssets),
    },
    {
      label: "Total Liability",
      value: formatCurrencyCompact(company.totalLiability),
    },
    {
      label: "Total Equity",
      value: formatCurrencyCompact(company.totalEquity),
    },

    // Cash Flow
    {
      label: "Net Operating Cash",
      value: formatCurrencyCompact(company.netOperatingCash),
    },
    {
      label: "Cash & Cash Equivalents",
      value: formatCurrencyCompact(company.cashAndEquivalents),
    },

    // Ratios
    {
      label: "Book Value per Share",
      value: formatCurrencyCompact(company.bookValuePerShare),
    },
    {
      label: "Pre-Tax Margin",
      value: formatPercent(company.preTaxMargin),
    },
    {
      label: "Net Profit Margin",
      value: formatPercent(company.netProfitMargin),
    },
    {
      label: "Return on Assets",
      value: formatPercent(company.returnOnAssets),
    },
    {
      label: "Return on Equity",
      value: formatPercent(company.returnOnEquity),
    },
    {
      label: "Asset Turnover",
      value: company.assetTurnover.toFixed(2),
    },
    {
      label: "Debt to Assets",
      value: company.debtToAssets.toFixed(2),
    },
    {
      label: "Debt to Equity",
      value: company.debtToEquity.toFixed(2),
    },
    {
      label: "Cash Ratio",
      value: company.cashRatio.toFixed(2),
    },
    {
      label: "Price to Book",
      value: company.priceToBook.toFixed(2),
    },
  ];
}
