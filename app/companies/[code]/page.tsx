import Link from "next/link";
import { notFound } from "next/navigation";

import CompanyKPIGrid from "@/components/company-kpi-grid";
import CompanyCharts from "@/components/company-charts";
import CompanyFinancialsTable from "@/components/company-financials-table";
import { companies } from "@/types/company";
import { formatCurrencyCompact, formatPercent } from "@/utils/format";

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CompanyDetailPage({ params }: Props) {
  const { code } = await params;
  const companyCode = code.toUpperCase();

  const company = companies.find((c) => c.code === companyCode);

  if (!company) notFound();

  /* ---------- Financial rows ---------- */

  const financialRows = [
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

  /* ---------- Mock chart data (temporary) ---------- */

  const chartData = [
    {
      date: "2021",
      price: company.pricePerShare * 0.7,
      revenue: company.operatingRevenue * 0.85,
      netProfit: company.netProfit * 0.8,
    },
    {
      date: "2022",
      price: company.pricePerShare * 0.85,
      revenue: company.operatingRevenue * 0.95,
      netProfit: company.netProfit * 0.9,
    },
    {
      date: "2023",
      price: company.pricePerShare,
      revenue: company.operatingRevenue,
      netProfit: company.netProfit,
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Back */}
      <div className="mb-6">
        <Link
          href="/"
          className="
            text-sm font-medium
            text-zinc-500 hover:text-zinc-900
            dark:text-zinc-400 dark:hover:text-zinc-100
            transition
          "
        >
          ← Back to Companies
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8 rounded-xl border p-6">
        <h1 className="text-3xl font-semibold">{company.name}</h1>
        <p className="mt-2 text-sm text-zinc-500">
          {company.code} • {company.industry}
        </p>
      </div>

      {/* KPI */}
      <CompanyKPIGrid company={company} />

      {/* Charts */}
      <CompanyCharts history={chartData} />

      {/* Financials */}
      <CompanyFinancialsTable rows={financialRows} />
    </main>
  );
}
