import GamePageWrapper from "@/app/game/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMG - Game",
  description: "Card Matching Game @web2024-card",
};

const GamePage = () => {
  return <GamePageWrapper />;
};

export default GamePage;
