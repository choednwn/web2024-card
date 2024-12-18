import { login as backendLogin } from "@/lib/api/users";
import { UserStore } from "@/lib/user/user.types";
import { create } from "zustand";

export const useUserStore = create<UserStore>((set, get) => ({
  userId: "",
  sessionToken: "",
  sessionValidated: false,
  highScore: 0,
  gamesPlayed: 0,

  setUserId: (userId: string) => {
    set({ userId });
  },
  setSessionToken: (token: string) => {
    set({ sessionToken: token });
  },
  setSessionValidated: (validated: boolean) => {
    set({ sessionValidated: validated });
  },
  // setHighScore: (score: number) => {
  //   set({ highScore: score });
  // },

  storeToLocal: (userId: string, sessionToken: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "user",
        JSON.stringify({ userId: userId, sessionToken: sessionToken }),
      );
    }
  },
  grabFromLocal: () => {
    if (typeof window !== "undefined") {
      const localData = window.localStorage.getItem("user");
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
