import Card from "@/components/game/card";
import { GameState } from "@/lib/constants";
import { CardData, GameData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type GameBoardProps = {
  gameData: GameData;
  update: (data: GameData) => void;
};

export default function GameBoard({ gameData, update }: GameBoardProps) {
  useEffect(() => {
    const cards = [];
    for (let i = 0; i < gameData.cardRows; i++) {
      const rowCards = [];
      for (let j = 0; j < gameData.cardCols; j++) {
        rowCards.push({
          id: i * gameData.cardCols + j,
          type: 0,
          img: "",
        });
      }
      cards.push(rowCards);
    }
    update({ ...gameData, cards });
    console.log(gameData);
  }, [gameData.cardRows, gameData.cardCols]);

  return (
    <div className="w-auto h-auto max-h-[400px] md:mx-24">
      <div
        className={cn(
          "size-full flex justify-center flex-col gap-4 border border-red-500",
          gameData.state !== GameState.MENU ? "" : "hidden"
        )}
      >
        {gameData.cards.map((row, i) => (
          <div
            key={i}
            className="flex size-full justify-center gap-4 border border-purple-500"
          >
            {row.map((card, j) => (
              <Card key={j}>{card.id}</Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
