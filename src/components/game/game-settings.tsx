"use client";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CardAmount } from "@/lib/constants";
import { useGameStore } from "@/lib/game/game.store";
import { GameMode, GameState } from "@/lib/game/game.types";
import { ChevronLeftIcon, ChevronRight, PlayIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const GameSettings = ({ className }: { className?: string }) => {
  const router = useRouter();
  const gameMode = useGameStore((state) => state.gameMode);
  const cardAmount = useGameStore((state) => state.cardAmount);
  const setGameMode = useGameStore((state) => state.setGameMode);
  const setCardAmount = useGameStore((state) => state.setCardAmount);
  const setGameState = useGameStore((state) => state.setGameState);

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
    <div className={className}>
      <div className="flex flex-row gap-2 font-mono">
        <div className="flex w-fit flex-col gap-2">
          {/* Game Mode */}
          <ToggleGroup
            onValueChange={(e: GameMode) => setGameMode(e)}
            defaultValue={gameMode}
            type="single"
            variant="outline"
            className="w-full"
          >
            <ToggleGroupItem value={GameMode.Casual} className="w-full">
              Casual
            </ToggleGroupItem>
            <ToggleGroupItem value={GameMode.Hardcore} className="w-full">
              Hardcore
            </ToggleGroupItem>
          </ToggleGroup>

          {/* Card Amount */}
          <ToggleGroup
            defaultValue={CardAmount.Default.toString()}
            type="single"
            variant="outline"
            className="flex w-full flex-row"
          >
            <Button variant="outline" onClick={decreaseCardAmount}>
              <ChevronLeftIcon />
            </Button>
            <div className="w-12 text-center">{cardAmount}</div>
            <Button variant="outline" onClick={increaseCardAmount}>
              <ChevronRight />
            </Button>
          </ToggleGroup>
        </div>
        <Button
          variant="ghost"
          className="size-20 rounded-md border border-border"
          onClick={() => {
            setGameState(GameState.Playing);
            router.push("/game");
          }}
        >
          <PlayIcon />
        </Button>
      </div>
    </div>
  );
};
