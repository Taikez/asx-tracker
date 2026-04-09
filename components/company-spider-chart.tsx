"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = {
  data: {
    label: string;
    score: number;
  }[];
};

export default function CompanySpiderChart({ data }: Props) {
  const chartData = data.map((d) => ({
    metric: d.label,
    value: d.score,
  }));

  const CustomDot = ({ cx, cy }: any) => (
    <circle cx={cx} cy={cy} r={3} fill="#2563eb" />
  );

  return (
    <div className="mt-10 rounded-xl border p-6 mb-12">
      <h2 className="mb-4 text-lg font-semibold">Financial Profile</h2>

      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis domain={[0, 100]} tick={false} />
          <Radar
            dataKey="value"
            stroke="rgb(37 99 235)" // blue-600
            fill="rgb(37 99 235)"
            fillOpacity={0.35}
            dot={{
              r: 3,
              fill: "rgb(37 99 235)",
              strokeWidth: 0,
            }}
            activeDot={{
              r: 5,
              fill: "rgb(37 99 235)",
            }}
          />
          <Tooltip
            formatter={(value?: number) => {
              if (typeof value !== "number") return "-";
              return `${Math.round(value)} / 100`;
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
