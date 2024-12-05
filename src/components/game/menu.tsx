import Button from "@/components/button";
import { CardAmount } from "@/lib/constants";
import { GameState } from "@/lib/game/game.enums";
import { useGameStore } from "@/lib/game/game.store";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const GameMenu = () => {
  const cardAmount = useGameStore((state) => state.cardAmount);
  const setGameState = useGameStore((state) => state.setGameState);
  const setCardAmount = useGameStore((state) => state.setCardAmount);

  const increaseCardAmount = () => {
    if (cardAmount < CardAmount.Max) {
      setCardAmount(cardAmount + CardAmount.Multiplier);
    }
  };

  const decreaseCardAmount = () => {
    if (cardAmount > CardAmount.Min) {
      setCardAmount(cardAmount - CardAmount.Multiplier);
    }
  };

  return (
    <div className="flex size-fit flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">카드 개수 선택</h1>
      <div className="flex flex-row items-center justify-center gap-6">
        <Button outline onClick={() => decreaseCardAmount()} className="py-4">
          <ArrowLeftIcon className="size-8" />
        </Button>
        <div className="w-24 text-center text-4xl font-bold">{cardAmount}</div>
        <Button outline onClick={() => increaseCardAmount()} className="py-4">
          <ArrowRightIcon className="size-8" />
        </Button>
      </div>
      <Button
        outline
        className="w-full"
        onClick={() => {
          setGameState(GameState.Playing);
        }}
      >
        Start Game
      </Button>
    </div>
  );
};

export default GameMenu;
