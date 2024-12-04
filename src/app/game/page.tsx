"use client";

import GameManager from "@/components/game/game-manager";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function GamePage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);

  useLayoutEffect(() => {
    const id = localStorage.getItem("userID");
    if (!id) {
      router.push("/login");
    }
    setUserId(id);
  }, []);

  return (
    <>
      {userId && (
        <main className="h-full">
          <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center border-2 border-pink-500">
            <GameManager />
          </div>
        </main>
      )}
    </>
  );
}
