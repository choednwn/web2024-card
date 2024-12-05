"use client";

import Game from "@/components/game/game";
import GameMenu from "@/components/game/menu";
import GameScoreboard from "@/components/game/scoreboard";
import { useGameStore } from "@/lib/stores";
import { GameState } from "@/lib/types/game.enums";

const GameWrapper = () => {
  const gameState = useGameStore((state) => state.gameState);

  return (
    <div>
      <h1>Game</h1>
      {/* 설정 메뉴 : GameState.Menu */}
      {gameState === GameState.Menu ? <GameMenu /> : <></>}

      {/* 게임 플레이 : GameState.Playing */}
      {gameState === GameState.Playing ? <Game /> : <></>}

      {/* 게임 종료 : GameState.Finished */}
      {gameState === GameState.Finished ? <GameScoreboard /> : <></>}
    </div>
  );
};

export default GameWrapper;
