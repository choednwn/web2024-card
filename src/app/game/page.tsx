"use client";

import Game from "@/components/game/game";
import { GameState } from "@/components/game/game.enums";
import GameMenu from "@/components/game/menu";
import { useGameStore } from "@/lib/stores";

const GamePage = () => {
  const gameState = useGameStore((state) => state.gameState);
  console.log(gameState); //! TEMP: Log Game State

  return (
    <div>
      <div>
        <h1>Game</h1>
        {/* 설정 메뉴 : GameState.Menu */}
        {gameState === GameState.Menu ? <GameMenu /> : <></>}

        {/* 게임 플레이 : GameState.Playing */}
        {gameState === GameState.Playing ? <Game /> : <></>}

        {/* 게임 종료 : GameState.Finished */}
        {gameState === GameState.Finished ? <div>Game Finished</div> : <></>}
      </div>
    </div>
  );
};

export default GamePage;
