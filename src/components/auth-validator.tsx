"use client";

import { login } from "@/lib/api/users";
import { useUserStore } from "@/lib/user/user.store";
import { useEffect } from "react";

export const AuthValidator = () => {
  const grabFromLocal = useUserStore((state) => state.grabFromLocal);
  const setUserId = useUserStore((state) => state.setUserId);
  const setSessionToken = useUserStore((state) => state.setSessionToken);
  const setSessionValid = useUserStore((state) => state.setSessionValid);

  const validateLocalAuth = async (userId: string, sessionToken: string) => {
    const user = await login(userId);

    if (user) {
      setUserId(userId);
      setSessionToken(sessionToken);
      setSessionValid(true);
    }
  };

  useEffect(() => {
    const value = grabFromLocal();
    if (value) validateLocalAuth(value.userId, value.sessionToken);
  }, []);

  return <div></div>;
};
