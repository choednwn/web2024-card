import { CardAmount } from "@/lib/constants";
import {
  CardData,
  FlippedData,
  GameMode,
  GameState,
  GameStore,
} from "@/lib/game/game.types";
import { create } from "zustand";

// Default values
export const useGameStore = create<GameStore>((set, get) => ({
  gameState: GameState.Menu,
  gameMode: GameMode.Casual,
  cardAmount: CardAmount.Default,
  score: 0,
  matched: 0,
  cards: [],
  flipped: [],

  setGameState: (gameState: GameState) => set({ gameState }),
  setGameMode: (gameMode: GameMode) => set({ gameMode }),
  setCardAmount: (cardAmount: number) => set({ cardAmount }),
  setScore: (score: number) => set({ score }),
  setMatched: (matched: number) => set({ matched }),
  setCards: (cards: CardData[][]) => set({ cards }),
  updateCard: (
    col: number,
    row: number,
    data: { flipped?: boolean; matched?: boolean },
  ) => {
    const newCards = [...get().cards];
    newCards[col][row] = { ...newCards[col][row], ...data };
    set({ cards: newCards });
  },
  addToFlipped: (flippedCard: FlippedData) =>
    set({ flipped: [...get().flipped, flippedCard] }),
  clearFlipped: () => set({ flipped: [] }),
  resetGame: () =>
    set({
      score: 0,
      matched: 0,
      cards: [],
      flipped: [],
    }),
}));
