import Button from "@/components/button";
import { useGameStore } from "@/lib/stores";
import { GameState } from "@/lib/types/game.enums";

const GameMenu = () => {
  const setGameState = useGameStore((state) => state.setGameState);

  return (
    <div>
      <Button onClick={() => setGameState(GameState.Playing)}>
        Start Game
      </Button>
    </div>
  );
};

export default GameMenu;
