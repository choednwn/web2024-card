import { CardAmount } from "@/lib/constants";
import {
  CardData,
  FlippedData,
  GameDifficulty,
  GameMode,
  GameState,
  GameStore,
} from "@/lib/game/game.types";
import { create } from "zustand";

// Default values
export const useGameStore = create<GameStore>((set, get) => ({
  gameState: GameState.Menu,
  gameMode: GameMode.Casual,
  gameDifficulty: GameDifficulty.Normal,
  cardAmount: CardAmount.Default,
  score: 0,
  matched: 0,
  cards: [],
  flipped: [],

  setGameState: (gameState: GameState) => set({ gameState }),
  setGameMode: (gameMode: GameMode) => set({ gameMode }),
  setGameDifficulty: (gameDifficulty: GameDifficulty) =>
    set({ gameDifficulty }),
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
  addToFlipped: (card: FlippedData) =>
    set({ flipped: [...get().flipped, card] }),
  clearFlipped: () => set({ flipped: [] }),
  resetGame: () =>
    set({
      gameState: GameState.Menu,
      gameMode: GameMode.Casual,
      gameDifficulty: GameDifficulty.Normal,
      cardAmount: CardAmount.Default,
      score: 0,
      matched: 0,
      cards: [],
      flipped: [],
    }),
}));
