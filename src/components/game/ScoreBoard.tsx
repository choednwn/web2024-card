import Button from "@/components/Button";
import { useGameStore } from "@/lib/game/game.store";
import { useEffect } from "react";

//! DB랑 연결 해야됨
/**
 * **GameScoreboard** \
 * 게임 스코어보드 컴포넌트 \
 * (게임 끝나고 표시)
 */
const GameScoreboard = () => {
  const score = useGameStore((state) => state.score);
  const highScore = useGameStore((state) => state.highScore);
  const gamesPlayed = useGameStore((state) => state.gamesPlayed);
  const setHighScore = useGameStore((state) => state.setHighScore);
  const setGamesPlayed = useGameStore((state) => state.setGamesPlayed);
  const resetGame = useGameStore((state) => state.resetGame);

  // Set new high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
    setGamesPlayed(gamesPlayed + 1);
  }, []);

  return (
    <div className="flex size-fit flex-col gap-8">
      <h1 className="text-2xl font-bold">Leaderboard</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <div className="text-xl font-bold">1. Player 1</div>
          <div className="text-xl font-bold">100</div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="text-xl font-bold">2. Player 2</div>
          <div className="text-xl font-bold">90</div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="text-xl font-bold">3. Player 3</div>
          <div className="text-xl font-bold">80</div>
        </div>

        {/* User Score */}
        <div className="flex flex-row items-center justify-center gap-8">
          <h1 className="text-2xl font-bold">High Score: {highScore}</h1>
          <h1 className="text-2xl font-bold">Score: {score}</h1>
        </div>

        {/* Play Again */}
        <Button outline onClick={() => resetGame()} className="w-full">
          Play Again
        </Button>
      </div>
    </div>
  );
};

export default GameScoreboard;
