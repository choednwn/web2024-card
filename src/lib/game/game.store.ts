import { CardAmount } from "@/lib/constants";
import { GameState } from "@/lib/game/game.enums";
import { CardData, FlippedData, GameStore } from "@/lib/game/game.types";
import { create } from "zustand";

/**
 * Game Stores - 게임 저장 데이터
 */
export const useGameStore = create<GameStore>((set) => ({
  gameState: GameState.Menu,
  cardAmount: CardAmount.Default,
  score: 0,
  highScore: 0,
  gamesPlayed: 0,
  matched: 0,
  cards: [],
  flipped: [],

  setGameState: (gameState: GameState) => set({ gameState }),
  setCardAmount: (cardAmount: number) => set({ cardAmount }),
  setScore: (score: number) => set({ score }),
  setHighScore: (score: number) => set({ highScore: score }),
  setGamesPlayed: (gamesPlayed: number) => set({ gamesPlayed }),
  setCards: (cards: CardData[][]) => set({ cards }),
  setMatched: (matched: number) => set({ matched }),
  updateCard: (
    col: number,
    row: number,
    data: { flipped?: boolean; matched?: boolean },
    cards: CardData[][],
  ) => {
    const newCards = [...cards];
    newCards[col][row] = { ...newCards[col][row], ...data };
    set({ cards: newCards });
  },
  addToFlipped: (
    col: number,
    row: number,
    imageId: number,
    flipped: FlippedData[],
  ) => {
    const newFlipped = [...flipped];
    newFlipped.push({ col, row, imageId });
    set({ flipped: newFlipped });
  },
  clearFlipped: () => set({ flipped: [] }),
  resetGame: () =>
    set({
      gameState: GameState.Menu,
      cardAmount: CardAmount.Default,
      score: 0,
      gamesPlayed: 0,
      matched: 0,
      cards: [],
      flipped: [],
    }),
}));
