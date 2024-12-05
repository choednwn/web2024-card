import Button from "@/components/Button";
import { GameState } from "@/components/game/Game.enums";
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
