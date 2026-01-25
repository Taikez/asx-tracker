"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { formatCurrencyCompact } from "@/utils/format";

type Props = {
  history: {
    date: string;
    price: number;
    revenue: number;
    netProfit: number;
  }[];
};

export default function CompanyCharts({ history }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      {/* Price Chart */}
      <div className="rounded-xl border p-4">
        <h3 className="mb-4 text-sm font-medium">Share Price</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => `$${value.toFixed(0)}`} />
            <Tooltip
              formatter={(value) =>
                typeof value === "number" ? formatCurrencyCompact(value) : value
              }
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue & Profit Chart */}
      <div className="rounded-xl border p-4">
        <h3 className="mb-4 text-sm font-medium">Revenue & Net Profit</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => formatCurrencyCompact(value)} />
            <Tooltip
              formatter={(value) =>
                typeof value === "number" ? formatCurrencyCompact(value) : value
              }
            />
            <Line dataKey="revenue" stroke="#22c55e" strokeWidth={2} />
            <Line dataKey="netProfit" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
