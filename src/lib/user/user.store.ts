import { login as backendLogin } from "@/lib/api/users";
import { UserStore } from "@/lib/user/user.types";
import { create } from "zustand";

export const useUserStore = create<UserStore>((set, get) => ({
  userId: "",
  sessionToken: "",
  sessionValid: false,
  highScore: 0,
  gamesPlayed: 0,

  setUserId: (userId: string) => {
    set({ userId });
  },
  setSessionToken: (token: string) => {
    set({ sessionToken: token });
  },
  setSessionValid: (validated: boolean) => {
    set({ sessionValid: validated });
  },

  storeToLocal: (userId: string, sessionToken: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "userData",
        JSON.stringify({ userId, sessionToken }),
      );
    }
  },
  grabFromLocal: () => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("userData");
      if (localData) {
        const { userId, sessionToken } = JSON.parse(localData);
        if (userId && sessionToken) {
          return { userId, sessionToken };
        }
      }
    }
    return null;
  },
}));
