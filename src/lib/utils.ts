import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashSHA256 = async (str: string): Promise<string> => {
  const utf8 = new TextEncoder().encode(str);
  return crypto.subtle.digest("SHA-256", utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  });
};

// 입력값 검증 유틸리티
export const validateUserId = (userId: string): boolean => /^[a-zA-Z0-9_]{5,20}$/.test(userId);
export const validatePassword = (password: string): boolean =>
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);

