"use client";

import { Button } from "@/components/ui/button";
import { useGameStore } from "@/lib/game/game.store";
import { GameState } from "@/lib/game/game.types";
import { useUserStore } from "@/lib/user/user.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const GameOver = () => {
  const router = useRouter();
  const userId = useUserStore((state) => state.userId);
  const gameState = useGameStore((state) => state.gameState);
  const score = useGameStore((state) => state.score);

  const postGameData = async () => {
    const response = await fetch("/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, score }),
    });

    const res = await response.json();
    return res.success;
  };

  useEffect(() => {
    if (gameState === GameState.Over) {
      console.log(postGameData());
    }
  }, [gameState]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 font-bold">
      <h1 className="text-4xl">나의 점수: {score}</h1>
      <Button onClick={() => router.push("/dash")}>Return to Dashboard</Button>
    </div>
  );
};
