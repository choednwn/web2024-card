"use client";

import {
  CARDS_MULTIPLIER,
  DEFAULT_CARDS_AMT,
  GameState,
  MAX_CARDS_AMT,
  MIN_CARDS_AMT,
} from "@/lib/constants";
import { GameData } from "@/lib/types";
import { calcBoardSize, cn } from "@/lib/utils";
import { useState } from "react";

type GameSelectMenuProps = {
  gameData: GameData;
  update: (data: GameData) => void;
};

export default function GameSelectMenu({
  gameData,
  update,
}: GameSelectMenuProps) {
  const [cardsAmt, setCardAmt] = useState(DEFAULT_CARDS_AMT);
  const [size, setSize] = useState([0, 0]);

  const increaseCardAmt = () => {
    if (cardsAmt < MAX_CARDS_AMT) setCardAmt(cardsAmt + CARDS_MULTIPLIER);
  };
  const decreaseCardAmt = () => {
    if (cardsAmt > MIN_CARDS_AMT) setCardAmt(cardsAmt - CARDS_MULTIPLIER);
  };

  const setSizeFromAmt = () => {
    const newSize = calcBoardSize(cardsAmt);
    size.forEach((val, i) => {
      size[i] = i === 0 ? newSize[0] : newSize[1];
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col border border-black",
        gameData.state === GameState.MENU ? "" : "hidden"
      )}
    >
      <h1>Select Difficulty</h1>
      <div className="flex justify-between">
        <button
          onClick={() => {
            decreaseCardAmt();
          }}
          className="border border-black"
        >
          less
        </button>
        {cardsAmt}
        <button
          onClick={() => {
            increaseCardAmt();
          }}
          className="border border-black"
        >
          more
        </button>
      </div>
      <button
        onClick={() => {
          setSizeFromAmt();
          update({
            ...gameData,
            state: GameState.PLAYING,
            cardsAmt: cardsAmt,
            cardRows: size[0],
            cardCols: size[1],
          });
        }}
        className="border border-black"
      >
        Start
      </button>
    </div>
  );
}
