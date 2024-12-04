"use client";
import GameBoard from "@/components/game/game-board";
import GameOverMenu from "@/components/game/game-over-menu";
import GameSelectMenu from "@/components/game/game-select-menu";
import { DEFAULT_CARDS_AMT, GameState } from "@/lib/constants";
import { GameData } from "@/lib/types";
import { useEffect, useState } from "react";

export default function GameManager() {
  //! Convert to multiple states and reduce this mess
  const [gameData, setGameData] = useState<GameData>({
    state: GameState.MENU,
    score: 0,
    cards: [],
    cardsAmt: DEFAULT_CARDS_AMT,
    cardRows: 0,
    cardCols: 0,
  });

  return (
    <div className="relative size-full border border-blue-500">
      <GameSelectMenu gameData={gameData} update={setGameData} />
      <GameBoard gameData={gameData} update={setGameData} />
      <GameOverMenu gameData={gameData} update={setGameData} />
    </div>
  );
}
