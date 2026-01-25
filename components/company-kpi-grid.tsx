import { Company } from "@/types/company";
import { formatCurrencyCompact } from "@/utils/format";

type Props = {
  company: Company;
};

export default function CompanyKPIGrid({ company }: Props) {
  const items = [
    { label: "Share Price", value: `$${company.pricePerShare}` },
    { label: "Market Cap", value: formatCurrencyCompact(company.marketCap) },
    { label: "Net Profit", value: formatCurrencyCompact(company.netProfit) },
    { label: "ROE", value: `${company.returnOnEquity}%` },
    { label: "ROA", value: `${company.returnOnAssets}%` },
    { label: "Debt to Equity", value: company.debtToEquity },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
      {items.map((item) => (
        <div
          key={item.label}
          className="
            rounded-xl
            border border-zinc-200 dark:border-zinc-800
            bg-white dark:bg-zinc-950
            p-4
          "
        >
          <p className="text-xs text-zinc-500">{item.label}</p>
          <p className="mt-1 text-lg font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
