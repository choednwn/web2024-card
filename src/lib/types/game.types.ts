import { GameState } from "@/lib/types/game.enums";

export type GameStore = {
  // Current Game
  gameState: GameState;
  score: number;
  flipped: boolean[];
  matched: boolean[];
  selectedCardIndexes: number[];
  // Record
  highScore: number;
  gamesPlayed: number;

  setGameState: (gameState: GameState) => void;
  setGameScore: (score: number) => void;
  getGameRecord: (highScore: number, gamesPlayed: number) => void;

  // setFlipped: (i: number) => void; //! Temp
  // setMatched: (i: number) => void; //! Also temp
  // setSelectedCardIndexes: (i: number) => void; //! Also also temp
};
