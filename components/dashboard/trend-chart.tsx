"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";

interface TrendChartProps {
  data: number[];
}

export function TrendChart({ data }: TrendChartProps) {
  const chartData = data.map((value, index) => ({ value, index }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
