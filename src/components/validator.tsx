"use client";

import { useLoginStore } from "@/lib/stores";
import { useEffect } from "react";

const AuthValidator = () => {
  const validateLocalAuth = useLoginStore((state) => state.validateLocalAuth);
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);

  useEffect(() => {
    validateLocalAuth();
    console.log("ran auth");
  }, []);

  return <div id="auth-validator"></div>;
};

export default AuthValidator;
