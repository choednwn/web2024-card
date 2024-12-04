import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function gameMixCards(cards: number[]) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

export function calcBoardSize(cardsAmt: number) {
  const divisor = [];
  for (let i = 1; i <= Math.ceil(cardsAmt / 2); i++) {
    if (cardsAmt % i === 0) {
      divisor.push(i);
      divisor.push(cardsAmt / i);
    }
  }
  divisor.sort((a, b) => a - b);

  return [divisor[divisor.length / 2 - 1], divisor[divisor.length / 2]];
}
