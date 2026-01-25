"use client";

type Props = {
  search: string;
  industry: string;
  industries: string[];
  onSearchChange: (value: string) => void;
  onIndustryChange: (value: string) => void;
};

export default function HomeFiltersBar({
  search,
  industry,
  industries,
  onSearchChange,
  onIndustryChange,
}: Props) {
  return (
    <div
      className="
        mb-6
        flex flex-col gap-4
        md:flex-row md:items-center md:justify-between
      "
    >
      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by code or company name..."
        className="
          w-full md:max-w-sm
          rounded-lg border border-zinc-200 dark:border-zinc-800
          bg-white dark:bg-zinc-950
          px-3 py-2 text-sm
          text-zinc-900 dark:text-zinc-100
          placeholder:text-zinc-400
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />

      {/* Industry Dropdown */}
      <select
        value={industry}
        onChange={(e) => onIndustryChange(e.target.value)}
        className="
          w-full md:w-48
          rounded-lg border border-zinc-200 dark:border-zinc-800
          bg-white dark:bg-zinc-950
          px-3 py-2 text-sm
          text-zinc-900 dark:text-zinc-100
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        <option value="">All Industries</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>
            {ind}
          </option>
        ))}
      </select>
    </div>
  );
}
