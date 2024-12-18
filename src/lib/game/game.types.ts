export enum GameState {
  Error = "error",
  Menu = "menu",
  Ready = "ready",
  Playing = "playing",
  Over = "over",
}

export enum GameMode {
  Casual = "casual",
  Hardcore = "hardcore", //! 더 좋은 이름이 생각 안남... 지정 점수에서 0 되면 탈락
}

export type CardData = {
  id: number;
  imageId: number;
  flipped: boolean;
  matched: boolean;
};

export type FlippedData = {
  col: number;
  row: number;
  imageId: number;
};

export type GameStore = {
  // Game State
  gameState: GameState;
  // Pregame Settings
  gameMode: GameMode;
  cardAmount: number;
  // Game Data
  score: number;
  matched: number;
  cards: CardData[][];
  flipped: FlippedData[];

  // Functions
  setGameState: (gameState: GameState) => void;
  setGameMode: (gameMode: GameMode) => void;
  setCardAmount: (cardAmt: number) => void;
  setScore: (score: number) => void;
  setMatched: (matched: number) => void;
  setCards: (cards: CardData[][]) => void;
  updateCard: (
    col: number,
    row: number,
    data: { flipped?: boolean; matched?: boolean },
  ) => void;
  addToFlipped: (flippedCard: FlippedData) => void;
  clearFlipped: () => void;
  resetGame: () => void;
};
