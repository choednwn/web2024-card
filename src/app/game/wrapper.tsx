"use client";

import Game from "@/components/game/game";
import GameMenu from "@/components/game/menu";
import GameScoreboard from "@/components/game/scoreboard";
import { GameState } from "@/lib/game/game.enums";
import { useGameStore } from "@/lib/game/game.store";

const GameWrapper = () => {
  const gameState = useGameStore((state) => state.gameState);

  return (
    <div>
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
