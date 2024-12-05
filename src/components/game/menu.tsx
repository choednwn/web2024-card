import Button from "@/components/button";
import { GameState } from "@/components/game/game.enums";
import { useGameStore } from "@/lib/stores";

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
