import { GameState } from "@/components/game/Game.enums";

export type GameStore = {
  gameState: GameState;
  score: number;
  flipped: boolean[];
  matched: boolean[];
  selectedCardIndexes: number[];
  setGameState: (gameState: GameState) => void;
  setGameScore: (score: number) => void;
  // setFlipped: (i: number) => void; //! Temp
  // setMatched: (i: number) => void; //! Also temp
  // setSelectedCardIndexes: (i: number) => void; //! Also also temp
};
