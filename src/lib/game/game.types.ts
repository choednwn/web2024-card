import { GameState } from "@/lib/game/game.enums";

export type GameStore = {
  // Current Game
  gameState: GameState;
  cardAmount: number;
  score: number;
  highScore: number;
  gamesPlayed: number;
  matched: number;
  cards: CardData[][];
  flipped: FlippedData[];

  setGameState: (gameState: GameState) => void;
  setCardAmount: (cardAmount: number) => void;
  setScore: (score: number) => void;
  setHighScore: (score: number) => void;
  setGamesPlayed: (gamesPlayed: number) => void;
  setMatched: (matched: number) => void;
  setCards: (cards: CardData[][]) => void;
  updateCard: (
    col: number,
    row: number,
    data: { flipped?: boolean; matched?: boolean },
  ) => void;
  addToFlipped: (col: number, row: number, imageId: number) => void;
  clearFlipped: () => void;
};

export type CardData = {
  id: number;
  imageId: number; // match Id
  flipped: boolean;
  matched: boolean;
};

export type FlippedData = {
  col: number;
  row: number;
  imageId: number;
};
