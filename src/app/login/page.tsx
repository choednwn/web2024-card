"use client";

import { tempAuthUser } from "@/lib/temputils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userID") : null;
  const router = useRouter();

  return (
    <div className="flex h-full items-center justify-center">
      {userId ? (
        <>Show Profile</>
      ) : (
        <div className="h-fit w-96 border-2 border-solid border-red-500">
          <div className="">Login</div>
          <button
            className="cursor-pointer border-2 border-solid border-black"
            onClick={() => {
              tempAuthUser("tempuser");
              window.location.href = "/";
            }}
          >
            TEMP LOGIN BUTTON
          </button>
        </div>
      )}
    </div>
  );
}
