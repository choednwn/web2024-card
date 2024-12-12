import GameWrapper from "@/app/game/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "게임",
  description: "게임 페이지",
};

const GamePage = () => {
  return <GameWrapper />;
};

export default GamePage;
