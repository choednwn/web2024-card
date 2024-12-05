"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

const styles = {
  main: "size-full flex flex-col justify-center items-center max-w-6xl",
};

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-24">
      {/* Title */}
      <h1 className="rounded-lg border-4 border-white/75 px-24 py-2 text-4xl font-bold">
        Matching Game
      </h1>

      {/* Game Start Button */}
      <Button
        onClick={() => {
          router.push("/game");
        }}
        className="w-fit rounded-lg bg-sky-100/60 px-24 py-4 text-2xl font-bold transition-colors duration-300 hover:bg-sky-400"
      >
        Game Start
      </Button>
    </div>
  );
};

export default HomePage;
