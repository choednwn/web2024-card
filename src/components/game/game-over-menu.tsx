import { GameState } from "@/lib/constants";
import { GameData } from "@/lib/types";
import { cn } from "@/lib/utils";

type GameOverMenuProps = {
  gameData: GameData;
  update: (data: GameData) => void;
};

export default function GameOverMenu({ gameData, update }: GameOverMenuProps) {
  return (
    <div className={cn(gameData.state === GameState.GAMEOVER ? "" : "hidden")}>
      GameOver :D
    </div>
  );
}
