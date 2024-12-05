"use client";

import { useLoginStore } from "@/lib/login/login.stores";
import { useEffect } from "react";

const AuthValidator = () => {
  const validateLocalAuth = useLoginStore((state) => state.validateLocalAuth);
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);

  useEffect(() => {
    validateLocalAuth();
  }, []);

  return <div id="auth-validator"></div>;
};

export default AuthValidator;
