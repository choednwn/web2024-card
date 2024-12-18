import { login as backendLogin } from "@/lib/api/users";
import { UserStore } from "@/lib/user/user.types";
import { create } from "zustand";

export const useUserStore = create<UserStore>((set, get) => ({
  userId: "",
  sessionValidated: false,
  sessionToken: "",
  highScore: 0,
  gamesPlayed: 0,

  login: (userId: string, pwdHash: string) => {
    backendLogin(userId)
      .then((res) => {
        if (pwdHash === res?.userPwd) {
          set({ userId, sessionValidated: true });
          //! do something with session token blah blah blah
          return true;
        }
      })
      .catch(() => {
        console.log("Login failed");
      });
    return false;
  },
}));
