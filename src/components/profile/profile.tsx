"use client";

import { useLoginStore } from "@/lib/stores";

const ProfileMenu = () => {
  const userId = useLoginStore((state) => state.userId);
  const highScore = useLoginStore((state) => state.highScore);
  const gamesPlayed = useLoginStore((state) => state.gamesPlayed);

  return (
    <div className="flex size-fit flex-col items-center gap-4 rounded-lg border-2 border-white bg-sky-200/20 p-12 backdrop-blur-md">
      <h1 className="text-3xl font-bold">&lt;profile&gt;</h1>
      <div className="flex flex-row items-center justify-center gap-16">
        <div className="h-24 w-24 rounded-full bg-black"></div>
        <ul className="flex flex-col items-center justify-start">
          <li className="text-lg font-semibold">Name: {userId} </li>
          <li className="text-lg font-semibold">High Score: </li>
          <li className="text-lg font-semibold">Games Played: </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
