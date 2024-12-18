"use client";

import { useUserStore } from "@/lib/user/user.store";
import { useEffect } from "react";

export const AuthValidator = () => {
  const grabFromLocal = useUserStore((state) => state.grabFromLocal);

  useEffect(() => {
    const value = grabFromLocal();
    //! Do stuff to check if db blah blah blah
  }, []);

  return <div></div>;
};
