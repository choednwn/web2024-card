import { GameState } from "@/components/game/Game.enums";
import { GameStore } from "@/components/game/Game.types";
import { create } from "zustand";

/**
 * Site Stores - 사이트 저장 데이터
 * - 사용자 정보
 * - 로그인 현황 등등 (아마 localStorage에 저장될 듯)
 */
export const useSiteStore = create((set) => ({
  //! add here
}));

/**
 * Game Stores - 게임 저장 데이터
 */
export const useGameStore = create<GameStore>((set) => ({
  gameState: GameState.Menu,
  score: 0,
  flipped: [],
  matched: [],
  selectedCardIndexes: [],
  setGameState: (gameState: GameState) => set({ gameState }),
  setGameScore: (score: number) => set({ score }),
}));
