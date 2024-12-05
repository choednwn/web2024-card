import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

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

// !temp account (id: admin, pwd: admin)
const tempAdminAuth = (userId: string, sessionHash: string) => {
  if (
    userId === "admin" &&
    sessionHash ===
      "0458568a9dadf9e83b83f3b6c8a5d0bccd8246e64b7984d1c0cc09bb05d83e8e"
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * ! temp
 * @returns sessionHash - 세션 해시값
 */
export const authLogin = async (userId: string, pwdHash: string) => {
  const sessionHash = await hashSHA256(userId + pwdHash);

  return new Promise<string>((resolve, reject) => {
    //! Temp auth, change to DB check
    if (tempAdminAuth(userId, sessionHash)) {
      resolve(sessionHash);
    } else {
      reject(401);
    }
  });
};

export const authLocalSession = async (userId: string, sessionHash: string) => {
  return new Promise<boolean>((resolve, reject) => {
    //! Temp auth
    if (tempAdminAuth(userId, sessionHash)) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

// export function calcBoardSize(cardsAmt: number) {
//   const divisor = [];
//   for (let i = 1; i <= Math.ceil(cardsAmt / 2); i++) {
//     if (cardsAmt % i === 0) {
//       divisor.push(i);
//       divisor.push(cardsAmt / i);
//     }
//   }
//   divisor.sort((a, b) => a - b);

//   return [divisor[divisor.length / 2 - 1], divisor[divisor.length / 2]];
// }
