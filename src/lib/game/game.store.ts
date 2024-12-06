import { CardAmount } from "@/lib/constants";
import { GameState } from "@/lib/game/game.enums";
import { CardData, FlippedData, GameStore } from "@/lib/game/game.types";
import { create } from "zustand";

const initialState = {
  gameState: GameState.Menu,
  cardAmount: CardAmount.Default,
  score: 0,
  matched: 0,
  cards: [],
  flipped: [],
};

/**
 * Game Stores - 게임 저장 데이터
 */
export const useGameStore = create<GameStore>((set, get) => ({
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
  ) => {
    const newCards = [...get().cards];
    newCards[col][row] = { ...newCards[col][row], ...data };
    set({ cards: newCards });
  },
  addToFlipped: (col: number, row: number, imageId: number) =>
    set({ flipped: [...get().flipped, { col, row, imageId }] }),
  clearFlipped: () => set({ flipped: [] }),
  resetGame: () => set(initialState),
}));
// 거의 새벽 4시.. 아 진짜ㅣㅈ아ㅣㅁㅇ..ㅇ 왜 안되는겨.. 자고싶다
// !todo: 게임. 리셋. 기능. 다시. 시도.
