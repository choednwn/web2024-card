"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const DashRanking = ({ className }: { className?: string }) => {
  const [loadedData, setLoadedData] = useState<
    { userId: string; score: number; ranking: number }[]
  >([]);
  const [loadedPages, setLoadedPages] = useState(1);

  const getRankingData = async () => {
    setLoadedPages((a) => a + 1);
    const response = await fetch("/api/ranking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: loadedPages }),
    });
    return response.json();
  };

  const onRankingScroll = (e: any) => {
    const tracker = e.target;
    const limit = tracker.scrollHeight - tracker.clientHeight;
    if (e.target.scrollTop === limit) {
      getRankingData().then((res) => {
        setLoadedData((loadedData) => [...loadedData, ...res]);
      });
    }
  };

  useEffect(() => {
    getRankingData().then((res) => {
      setLoadedData((loadedData) => [...loadedData, ...res]);
    });
  }, []);

  return (
    <Card
      onScroll={(e) => onRankingScroll(e)}
      className={cn("no-scrollbar overflow-y-scroll", className)}
    >
      <CardHeader className="sticky top-0 z-50 h-fit bg-background/100">
        <CardTitle>게임 랭킹</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {loadedData.map((data, i) => (
              <TableRow key={i}>
                <TableCell>{data.ranking}</TableCell>
                <TableCell className="font-bold">{data.userId}</TableCell>
                <TableCell>{data.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
