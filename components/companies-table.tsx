"use client";

import { useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Company } from "@/types/company";
import Link from "next/link";

type SortKey = keyof Company;
type SortDirection = "asc" | "desc" | null;

type Props = {
  data: Company[];
  sortKey: keyof Company | null;
  sortDirection: SortDirection;
  onSortChange: (key: keyof Company | null, direction: SortDirection) => void;
};

export default function CompaniesTable({
  data,
  sortKey,
  sortDirection,
  onSortChange,
}: Props) {
  const rawData = data;

  const handleSort = (key: keyof Company) => {
    if (sortKey !== key) {
      onSortChange(key, "asc");
      return;
    }

    if (sortDirection === "asc") {
      onSortChange(key, "desc");
      return;
    }

    if (sortDirection === "desc") {
      onSortChange(null, null); // reset
      return;
    }

    onSortChange(key, "asc");
  };

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return rawData;

    return [...rawData].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return sortDirection === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [rawData, sortKey, sortDirection]);

  function SortIcon({ column }: { column: SortKey }) {
    if (column !== sortKey) return null;
    if (sortDirection === "asc")
      return <ChevronUp className="inline h-4 w-4 ml-1" />;
    if (sortDirection === "desc")
      return <ChevronDown className="inline h-4 w-4 ml-1" />;
    return null;
  }

  return (
    <div>
      <p
        className="
        mb-2
        text-xs
        text-zinc-500 dark:text-zinc-400
        select-none italic
      "
      >
        Click a column header to sort
      </p>
      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="min-w-full text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              {[
                ["code", "Code"],
                ["name", "Name"],
                ["industry", "Industry"],
                ["price", "Price"],
                ["marketCap", "Market Cap"],
              ].map(([key, label]) => (
                <th
                  key={key}
                  onClick={() => handleSort(key as SortKey)}
                  className="
                  px-4 py-3 text-left font-medium cursor-pointer
                  text-zinc-600 dark:text-zinc-400
                  select-none
                "
                >
                  {label}
                  <SortIcon column={key as SortKey} />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedData.map((company) => (
              <tr
                key={company.code}
                className="border-t border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <td className="px-4 py-3 font-medium text-blue-600 dark:text-blue-400">
                  <Link href={`/companies/${company.code}`}>
                    {company.code}
                  </Link>
                </td>
                <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
                  {company.name}
                </td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                  {company.industry}
                </td>
                <td className="px-4 py-3 text-right">
                  ${company.pricePerShare.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-right">
                  ${(company.marketCap / 1e9).toFixed(0)}B
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
