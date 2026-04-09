import { Company } from "@/types/company";

export type CompanyChartPoint = {
  date: string;
  price: number;
  revenue: number;
  netProfit: number;
};

export function getCompanyChartData(company: Company): CompanyChartPoint[] {
  return [
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
}
