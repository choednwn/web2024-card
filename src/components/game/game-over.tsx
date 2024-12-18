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
    <div className="flex flex-col gap-4 font-bold">
      <div>{score}</div>
      <Button onClick={() => router.push("/dash")}>Back to Dash</Button>
    </div>
  );
};
