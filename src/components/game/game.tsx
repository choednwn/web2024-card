import Button from "@/components/button";
import {
  CardFlipShowTime,
  ScoreOnMatch,
  ScoreOnMismatch,
} from "@/lib/constants";
import { GameState } from "@/lib/game/game.enums";
import { useGameStore } from "@/lib/game/game.store";
import { clearCards, setCardArray } from "@/lib/game/game.utils";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const Game = () => {
  const cardAmount = useGameStore((state) => state.cardAmount);
  const score = useGameStore((state) => state.score);
  const highScore = useGameStore((state) => state.highScore);
  const matched = useGameStore((state) => state.matched);
  const cards = useGameStore((state) => state.cards);
  const flipped = useGameStore((state) => state.flipped);

  const setGameState = useGameStore((state) => state.setGameState);
  const setScore = useGameStore((state) => state.setScore);
  const setMatched = useGameStore((state) => state.setMatched);
  const setCards = useGameStore((state) => state.setCards);
  const updateCard = useGameStore((state) => state.updateCard);
  const addToFlipped = useGameStore((state) => state.addToFlipped);
  const clearFlipped = useGameStore((state) => state.clearFlipped);
  const resetGame = useGameStore((state) => state.resetGame);

  // Create cards
  useEffect(() => {
    clearCards(cards);
    setCards(setCardArray(cardAmount));
  }, [cardAmount]);

  // Check if flipped cards are the same
  useEffect(() => {
    if (flipped.length === 2) {
      if (
        cards[flipped[0].col][flipped[0].row].imageId ===
        cards[flipped[1].col][flipped[1].row].imageId
      ) {
        // Matched
        // Update score
        setScore(score + ScoreOnMatch);
        updateCard(flipped[0].col, flipped[0].row, { matched: true }, cards);
        updateCard(flipped[1].col, flipped[1].row, { matched: true }, cards);
        setMatched(matched + 2);
      } else {
        // Not Matched
        // Update Score
        if (score + ScoreOnMismatch < 0) {
          setScore(0);
        } else {
          setScore(score + ScoreOnMismatch);
        }
        setTimeout(() => {
          updateCard(flipped[0].col, flipped[0].row, { flipped: false }, cards);
          updateCard(flipped[1].col, flipped[1].row, { flipped: false }, cards);
        }, CardFlipShowTime);
      }
      clearFlipped();
    }
  }, [flipped]);

  // Set score and matched
  useEffect(() => {
    if (matched === cardAmount) {
      setTimeout(() => {
        setGameState(GameState.Finished);
      }, CardFlipShowTime);
    }
  }, [matched]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row items-center justify-center gap-8">
        <h1 className="text-2xl font-bold">High Score: {highScore}</h1>
        <h1 className="text-2xl font-bold">Score: {score}</h1>
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-4">
        {cards.map((row, i) => (
          <div key={i} className="flex flex-row gap-4">
            {row.map((card, j) => (
              <div
                key={card.id}
                onClick={() => {
                  if (!cards[i][j].matched) {
                    updateCard(i, j, { flipped: !card.flipped }, cards);
                    addToFlipped(i, j, card.imageId, flipped);
                  }
                }}
                className={cn(
                  "flex h-32 w-32 flex-col items-center justify-center border-2 border-black bg-black/40",
                  cards[i][j].flipped && "bg-blue-500",
                  cards[i][j].matched && "bg-green-500",
                )}
              >
                <p>{card.id}</p>
                <p>({cards[i][j].imageId})</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Start over button */}
      <Button
        outline
        onClick={() => {
          resetGame();
          setGameState(GameState.Menu);
        }}
      >
        Start Over
      </Button>
    </div>
  );
};

export default Game;
