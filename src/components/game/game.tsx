import { Card } from "@/components/game/card";
import { CardFlipShownMilisec, Points } from "@/lib/constants";
import { useGameStore } from "@/lib/game/game.store";
import { GameMode, GameState } from "@/lib/game/game.types";
import { clearCards, getGridSize, setCardArray } from "@/lib/game/game.utils";
import { useEffect } from "react";

const Game = () => {
  // GameStore
  const gameMode = useGameStore((state) => state.gameMode);
  const cardAmount = useGameStore((state) => state.cardAmount);
  const score = useGameStore((state) => state.score);
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

  // On Load
  useEffect(() => {
    // Create Card Grid
    const gameContainer = document
      .getElementById("game-container")
      ?.getBoundingClientRect();
    if (gameContainer) {
      const gridSize = getGridSize(gameContainer.width, 96, 16, cardAmount);

      // 화면이 너무 작으면 실행 X
      if (gridSize[0] * gridSize[1] === 0) {
        setGameState(GameState.Error);
        return;
      }

      // Set Cards
      clearCards(cards);
      setCards(setCardArray(gridSize[0], gridSize[1], cardAmount));

      // Set Score
      if (gameMode === GameMode.Casual) {
        setScore(Points.Casual.StartingPoints);
      } else {
        setScore(cardAmount * Points.Hardcore.PointsPerCard);
      }
    } else {
      setGameState(GameState.Error);
    }
  }, []);

  // Check Flipped
  useEffect(() => {
    //! Hardcore 모드 구현해야 함.
    if (flipped.length === 2) {
      if (
        cards[flipped[0].col][flipped[0].row].imageId ===
        cards[flipped[1].col][flipped[1].row].imageId
      ) {
        // Matched
        // Update score
        setScore(score + Points.Casual.Match);
        updateCard(flipped[0].col, flipped[0].row, { matched: true });
        updateCard(flipped[1].col, flipped[1].row, { matched: true });
        setMatched(matched + 2);
        clearFlipped();
      } else {
        // Not Matched
        // Update Score
        if (score + Points.Casual.Mismatch < 0) {
          setScore(0);
        } else {
          setScore(score + Points.Casual.Mismatch);
        }
        setTimeout(() => {
          updateCard(flipped[0].col, flipped[0].row, { flipped: false });
          updateCard(flipped[1].col, flipped[1].row, { flipped: false });
          clearFlipped();
        }, CardFlipShownMilisec);
      }
    }
  }, [flipped]);

  // On Game Over
  useEffect(() => {
    if (matched === cardAmount) {
      setTimeout(() => {
        setGameState(GameState.Over);
      }, CardFlipShownMilisec);
    }
  }, [matched]);

  return (
    <div
      id="game-container"
      className="flex size-full items-center justify-center"
    >
      {/* Score */}
      <div></div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {cards.map((row, i) => (
          <div key={i} className="flex flex-row gap-4">
            {row.map((card, j) => (
              <div
                key={card.id}
                onClick={() => {
                  if (!cards[i][j].matched) {
                    // Locks flipping until flipped cards are hidden
                    if (flipped.length === 2) {
                      return;
                    }
                    // Add to flipped
                    if (
                      flipped.length === 0 ||
                      (flipped.length === 1 &&
                        !(flipped[0].col === i && flipped[0].row === j))
                    ) {
                      addToFlipped({ col: i, row: j, imageId: card.imageId });
                      updateCard(i, j, { flipped: true });
                    }
                  }
                }}
                className="animate-blink-in size-24 cursor-pointer duration-300 sm:size-32"
                style={{ animationDelay: `${i * 0.1 + j * 0.1 + 0.1}s` }}
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
