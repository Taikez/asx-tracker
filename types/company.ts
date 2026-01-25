export type Company = {
  // Identity
  code: string;
  name: string;
  industry: string;

  // Dates
  listingDate: string; // YYYY-MM-DD
  annualMonth: string; // e.g. "Jun"
  reportDate: string; // YYYY-MM-DD

  // Market
  totalShares: number;
  pricePerShare: number;
  marketCap: number;

  // Income Statement
  operatingRevenue: number;
  profitBeforeTax: number;
  netProfit: number;

  // Balance Sheet
  totalAssets: number;
  totalLiability: number;
  totalEquity: number;
  bookValuePerShare: number;

  // Cash Flow
  netOperatingCash: number;
  cashAndEquivalents: number;

  // Ratios
  preTaxMargin: number;
  netProfitMargin: number;
  returnOnAssets: number;
  returnOnEquity: number;
  assetTurnover: number;
  debtToAssets: number;
  debtToEquity: number;
  cashRatio: number;
  priceToBook: number;
};

export const companies: Company[] = [
  {
    code: "BHP",
    name: "BHP Group Ltd",
    industry: "Mining",

    listingDate: "1885-08-01",
    annualMonth: "Jun",
    reportDate: "2024-06-30",

    totalShares: 5_000_000_000,
    pricePerShare: 45.2,
    marketCap: 230_000_000_000,

    operatingRevenue: 72_000_000_000,
    profitBeforeTax: 21_000_000_000,
    netProfit: 17_000_000_000,

    totalAssets: 190_000_000_000,
    totalLiability: 90_000_000_000,
    totalEquity: 100_000_000_000,
    bookValuePerShare: 20.0,

    netOperatingCash: 24_000_000_000,
    cashAndEquivalents: 15_000_000_000,

    preTaxMargin: 29.1,
    netProfitMargin: 23.6,
    returnOnAssets: 8.9,
    returnOnEquity: 17.0,
    assetTurnover: 0.38,
    debtToAssets: 0.47,
    debtToEquity: 0.9,
    cashRatio: 0.8,
    priceToBook: 2.26,
  },

  {
    code: "CBA",
    name: "Commonwealth Bank",
    industry: "Financials",

    listingDate: "1912-01-01",
    annualMonth: "Jun",
    reportDate: "2024-06-30",

    totalShares: 1_700_000_000,
    pricePerShare: 108.4,
    marketCap: 180_000_000_000,

    operatingRevenue: 42_000_000_000,
    profitBeforeTax: 15_000_000_000,
    netProfit: 10_200_000_000,

    totalAssets: 1_200_000_000_000,
    totalLiability: 1_120_000_000_000,
    totalEquity: 80_000_000_000,
    bookValuePerShare: 47.0,

    netOperatingCash: 18_000_000_000,
    cashAndEquivalents: 140_000_000_000,

    preTaxMargin: 35.7,
    netProfitMargin: 24.3,
    returnOnAssets: 0.9,
    returnOnEquity: 12.8,
    assetTurnover: 0.035,
    debtToAssets: 0.93,
    debtToEquity: 14.0,
    cashRatio: 1.2,
    priceToBook: 2.3,
  },

  {
    code: "CSL",
    name: "CSL Limited",
    industry: "Healthcare",

    listingDate: "1994-06-01",
    annualMonth: "Jun",
    reportDate: "2024-06-30",

    totalShares: 480_000_000,
    pricePerShare: 290.1,
    marketCap: 140_000_000_000,

    operatingRevenue: 14_000_000_000,
    profitBeforeTax: 4_200_000_000,
    netProfit: 3_500_000_000,

    totalAssets: 45_000_000_000,
    totalLiability: 18_000_000_000,
    totalEquity: 27_000_000_000,
    bookValuePerShare: 56.0,

    netOperatingCash: 4_000_000_000,
    cashAndEquivalents: 3_200_000_000,

    preTaxMargin: 30.0,
    netProfitMargin: 25.0,
    returnOnAssets: 7.8,
    returnOnEquity: 13.0,
    assetTurnover: 0.31,
    debtToAssets: 0.4,
    debtToEquity: 0.67,
    cashRatio: 0.9,
    priceToBook: 5.18,
  },
];
