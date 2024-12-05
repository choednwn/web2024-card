import { GameState } from "@/lib/types/game.enums";
import { GameStore } from "@/lib/types/game.types";
import { LoginStore } from "@/lib/types/login.types";
import { authLocalSession, authLogin } from "@/lib/utils";
import { create } from "zustand";

/**
 * Login Stores - 사이트 저장 데이터
 * - 사용자 정보
 * - 로그인 현황 등등 (아마 localStorage에 저장될 듯)
 */
export const useLoginStore = create<LoginStore>((set) => ({
  userId: null,
  sessionHash: null,
  isAuthenticated: false,
  loginFailed: false,
  validateLocalAuth: () => {
    if (typeof window !== "undefined") {
      const localUserId = localStorage.getItem("userId");
      const localSessionHash = localStorage.getItem("sessionHash");
      if (localUserId && localSessionHash) {
        authLocalSession(localUserId, localSessionHash)
          .then((res) => {
            if (res) set({ isAuthenticated: true });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  },
  register: async (userId: string, pwdHash: string) => {
    
  },
  login: async (userId: string, pwdHash: string) => {
    set({ loginFailed: false });
    authLogin(userId, pwdHash)
      .then((sessionHash) => {
        set({ userId, sessionHash, isAuthenticated: true });
        if (typeof window !== "undefined") {
          localStorage.setItem("userId", userId);
          localStorage.setItem("sessionHash", sessionHash);
        }
      })
      .catch((e) => {
        console.log(e, "Login Failed");
        set({ loginFailed: true });
      });
  },
  logout: () => {
    set({ userId: null, sessionHash: null, isAuthenticated: false });
    if (typeof window !== "undefined") {
      localStorage.removeItem("userId");
      localStorage.removeItem("sessionHash");
    }
  },
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
  gamesPlayed: 0,
  highScore: 0,
  setGameState: (gameState: GameState) => set({ gameState }),
  setGameScore: (score: number) => set({ score }),
  getGameRecord: (gamesPlayed: number, highScore: number) => {
    set({ gamesPlayed, highScore });
  },
}));
