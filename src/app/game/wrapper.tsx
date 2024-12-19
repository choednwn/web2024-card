"use client";

import { BoundingContainer } from "@/components/bounding-container";
import Game from "@/components/game/game";
import { GameOver } from "@/components/game/game-over";
import { NavigationBar } from "@/components/navigation-bar";
import { Button } from "@/components/ui/button";
import { useGameStore } from "@/lib/game/game.store";
import { GameState } from "@/lib/game/game.types";
import { useUserStore } from "@/lib/user/user.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GamePageWrapper = () => {
  const router = useRouter();
  const gameState = useGameStore((state) => state.gameState);
  const setGameState = useGameStore((state) => state.setGameState);
  const resetGame = useGameStore((state) => state.resetGame);
  const gameStore = useGameStore();

  const sessionValidated = useUserStore((state) => state.sessionValid);
  useEffect(() => {
    if (!sessionValidated) {
      router.push("/login");
    } else if (gameState === GameState.Ready) {
      resetGame();
      setGameState(GameState.Playing);
    }
  }, [gameState]);

  return (
    <>
      <NavigationBar />
      <BoundingContainer>
        <div className="flex h-screen-sub-nav w-full items-center justify-center">
          {/* 게임 플레이 */}
          {gameState === GameState.Playing && <Game />}
          {/* 게임 종료 */}
          {gameState === GameState.Over && <GameOver />}
          {/* 메뉴 (게임 진행 X) */}
          {gameState === GameState.Menu && (
            <div className="flex flex-col items-center gap-5">
              <p>지금 진행중인 게임이 없습니다</p>
              <Button
                variant="outline"
                onClick={() => {
                  router.push("/");
                }}
                className="w-fit"
              >
                돌아가기
              </Button>
            </div>
          )}
          {/* 오류 */}
          {gameState === GameState.Error && (
            <div className="flex flex-col items-center gap-5">
              <p>오류가 발생했습니다</p>
              <div className="flex flex-row items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setGameState(GameState.Playing);
                    router.push("/game");
                  }}
                  className="w-fit"
                >
                  다시시작
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    router.push("/dash");
                  }}
                  className="w-fit"
                >
                  돌아가기
                </Button>
              </div>
            </div>
          )}
        </div>
      </BoundingContainer>
    </>
  );
};

export default GamePageWrapper;
