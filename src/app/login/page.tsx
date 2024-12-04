"use client";

import { tempAuthUser } from "@/lib/temputils";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const userId = localStorage.getItem("userID");
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
              window.location.reload();
              router.push("/");
            }}
          >
            TEMP LOGIN BUTTON
          </button>
        </div>
      )}
    </div>
  );
}
