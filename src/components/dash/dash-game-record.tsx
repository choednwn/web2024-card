"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useUserStore } from "@/lib/user/user.store";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const DashGameRecord = ({ className }: { className?: string }) => {
  const userId = useUserStore((state) => state.userId);
  const [chartData, setChartData] = useState<{ score: number }[]>([]);

  const getRecent = async () => {
    const response = await fetch("/api/recent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    return response.json();
  };

  useEffect(() => {
    setChartData([]);
    getRecent().then(
      (res: { userId: string; score: number; num_played: number }[]) => {
        for (let i = 0; i < res.length; i++) {
          setChartData((chartData) => [...chartData, { score: res[i].score }]);
        }
      },
    );
  }, []);

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>지난 10판 기록</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <Bar dataKey="score" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={16}
                className="fill-foreground"
                fontSize={16}
              />
            </Bar>
            <XAxis
              dataKey="recent"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
