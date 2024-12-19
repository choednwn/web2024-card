"use client";

import { BoundingContainer } from "@/components/bounding-container";
import { DashGameRecord } from "@/components/dash/dash-game-record";
import { DashRanking } from "@/components/dash/dash-ranking";
import { GameSettings } from "@/components/game/game-settings";
import { NavigationBar } from "@/components/navigation-bar";
import { UserProfile } from "@/components/user-profile";
import { useUserStore } from "@/lib/user/user.store";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashPageWrapper = () => {
  const router = useRouter();
  const userId = useUserStore((state) => state.userId);
  const sessionValid = useUserStore((state) => state.sessionValid);
  const [loaded, setLoaded] = useState(false);

  const getHighScore = async () => {
    const response = await fetch("/api/dash", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    return response.json();
  };

  useEffect(() => {
    // getHighScore().then((e) => console.log(e.highscore));
    if (!sessionValid) {
      router.push("/login");
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      <NavigationBar />
      <div className={cn("opacity-0", loaded && "opacity-100")}>
        <div className="border-b">
          <BoundingContainer className="grid grid-cols-1 gap-y-8 py-8 sm:grid-cols-2">
            <UserProfile className="justify-self-start" />
            <GameSettings className="justify-self-end" />
          </BoundingContainer>
        </div>
        <BoundingContainer className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          <DashGameRecord className="md:col-span-2 md:col-start-1" />
          <DashRanking className="md:col-start-3 md:max-h-[600px]" />
        </BoundingContainer>
      </div>
    </>
  );
};

export default DashPageWrapper;
