import GameWrapper from "@/app/game/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "게임",
  description: "게임 페이지",
};

const GamePage = () => {
  // Wrapper for client as metadata needs to be in a server comp.
  return <GameWrapper />;
};

export default GamePage;
