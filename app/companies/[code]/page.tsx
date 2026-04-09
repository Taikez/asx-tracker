import Link from "next/link";
import { notFound } from "next/navigation";

import CompanyKPIGrid from "@/components/company-kpi-grid";
import CompanyCharts from "@/components/company-charts";
import CompanyFinancialsTable from "@/components/company-financials-table";
import { companies } from "@/types/company";
import { getCompanyFinancialRows } from "@/lib/companies/financialRows";
import { getCompanyChartData } from "@/lib/companies/chartData";
import CompanySpiderChart from "@/components/company-spider-chart";
import { getCompanySpiderScores } from "@/lib/companies/spider/metrics";

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CompanyDetailPage({ params }: Props) {
  const { code } = await params;
  const companyCode = code.toUpperCase();

  const company = companies.find((c) => c.code === companyCode);

  if (!company) notFound();

  /* ---------- Financial rows ---------- */
  const financialRows = getCompanyFinancialRows(company);

  /* ---------- Mock chart data (temporary) ---------- */
  const chartData = getCompanyChartData(company);
  const spiderData = getCompanySpiderScores(company, companies);

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
      <CompanySpiderChart data={spiderData} />

      {/* Financials */}
      <CompanyFinancialsTable rows={financialRows} />
    </main>
  );
}
