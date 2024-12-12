import { CardImage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import "@/styles/cards.css";
import Image from "next/image";

type CardProps = {
  flipped: boolean;
  img_id: number;
  className?: string;
};

/**
 * **Card** \
 * 카드 컴포넌트
 *
 * @param {number} img_id - 카드 이미지 ID
 * @param {boolean} flipped - 카드가 뒤집혔는지 여부
 */
export default function Card({ img_id, flipped, className }: CardProps) {
  return (
    <div className={cn("size-32 [perspective:600px]", className)}>
      <div
        className={cn(
          "relative size-full border border-white transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "flipped",
        )}
      >
        <div className="card frontface z-10 bg-black/30 backdrop-blur-sm"></div>
        <div className="card backface -z-10 bg-black/30 backdrop-blur-sm">
          <Image
            src={CardImage[img_id]}
            alt="card"
            width={0}
            height={0}
            className="size-full p-2"
          />
        </div>
      </div>
    </div>
  );
}
