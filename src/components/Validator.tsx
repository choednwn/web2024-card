"use client";

import { useLoginStore } from "@/lib/login/login.stores";
import { useEffect } from "react";

/**
 * **AuthValidator** \
 * 사이트 로드 후 Auth 상태 확인
 */
const AuthValidator = () => {
  const validateLocalAuth = useLoginStore((state) => state.validateLocalAuth);

  useEffect(() => {
    validateLocalAuth();
  }, []);

  return <div id="auth-validator"></div>;
};

export default AuthValidator;
