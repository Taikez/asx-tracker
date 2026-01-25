"use client";

import Pagination from "@/components/common/pagination";
import CompaniesTable from "@/components/companies-table";
import HomeFiltersBar from "@/components/home-filters-bar";
import HomeHeader from "@/components/home-header";
import { companies, Company } from "@/types/company";
import { useState, useMemo, useEffect } from "react";

export default function HomePage() {
  const PAGE_SIZE = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");

  const [sortKey, setSortKey] = useState<keyof Company | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null,
  );

  /* ---------- Derived filters ---------- */

  const industries = useMemo(() => {
    return Array.from(new Set(companies.map((c) => c.industry)));
  }, []);

  const filteredData = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch =
        !search ||
        company.code.toLowerCase().includes(search.toLowerCase()) ||
        company.name.toLowerCase().includes(search.toLowerCase());

      const matchesIndustry = !industry || company.industry === industry;

      return matchesSearch && matchesIndustry;
    });
  }, [search, industry]);

  /* ---------- Sorting ---------- */

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      return sortDirection === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [filteredData, sortKey, sortDirection]);

  /* ---------- Pagination ---------- */

  const totalPages = Math.ceil(sortedData.length / PAGE_SIZE);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage]);

  /* ---------- Reset page on changes ---------- */

  useEffect(() => {
    setCurrentPage(1);
  }, [search, industry, sortKey, sortDirection]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <HomeHeader />

      <HomeFiltersBar
        search={search}
        industry={industry}
        industries={industries}
        onSearchChange={setSearch}
        onIndustryChange={setIndustry}
      />

      <CompaniesTable
        data={paginatedData}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSortChange={(key, direction) => {
          setSortKey(key);
          setSortDirection(direction);
        }}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
