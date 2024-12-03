"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function GamePage() {
  const router = useRouter();

  useLayoutEffect(() => {
    const userId = localStorage.getItem("userID");
    if (!userId) {
      router.push("/login");
    }
  });

  return (
    <main className="h-full border-2 border-red-500">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-center border-2 border-pink-500">
        <h1>GAME PAGE</h1>
        <div className="">

        </div>
      </div>
    </main>
  );
}
