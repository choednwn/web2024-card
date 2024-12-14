import "@/css/card.css";
import { CardImage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CardProps = {
  id: number;
  imageId: number;
  flipped: boolean;
  matched: boolean;
  className?: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className={cn("size-full [perspective:600px]", props.className)}>
      <div
        className={cn(
          "relative size-full border border-white transition-transform duration-500 [transform-style:preserve-3d]",
          props.flipped && "flipped",
        )}
      >
        <div className="card frontface z-10 bg-black/30 backdrop-blur-sm"></div>
        <div className="card backface -z-10 bg-black/30 backdrop-blur-sm">
          <Image
            src={CardImage[props.imageId]}
            alt="card"
            width={120}
            height={120}
            className="size-full p-2"
          />
        </div>
      </div>
    </div>
  );
};
