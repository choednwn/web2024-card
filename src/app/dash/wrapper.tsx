"use client";

import { BoundingContainer } from "@/components/bounding-container";
import { GameSettings } from "@/components/game/game-settings";
import { NavigationBar } from "@/components/navigation-bar";
import { UserProfile } from "@/components/user-profile";
import { useUserStore } from "@/lib/user/user.store";
import { useEffect } from "react";

const DashPageWrapper = () => {
  const userId = useUserStore((state) => state.userId);

  const getHighScore = async () => {
    const response = await fetch("/api/dash", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    return response.json();
  };

  useEffect(() => {
    getHighScore().then((e) => console.log(e.highscore));
  }, []);
  return (
    <>
      <NavigationBar />
      <div className="border-b">
        <BoundingContainer>
          {/* Profile & Game Settings */}
          <section className="grid grid-cols-1 gap-y-8 py-8 sm:grid-cols-2">
            <UserProfile className="justify-self-start" />
            <GameSettings className="justify-self-end" />
          </section>
          <section></section>
        </BoundingContainer>
      </div>
    </>
  );
};

export default DashPageWrapper;
