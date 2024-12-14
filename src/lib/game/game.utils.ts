import { CardImage } from "@/lib/constants";
import { CardData } from "@/lib/game/game.types";

export const shuffleCards = (cardAmount: number) => {
  const uniqueIds = new Set();
  while (uniqueIds.size < cardAmount / 2) {
    uniqueIds.add(Math.floor(Math.random() * CardImage.length));
  }
  const imageIds = Array.from(uniqueIds) as number[];
  imageIds.push(...imageIds);

  const shuffle = (arr: number[]) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  shuffle(imageIds);
  return imageIds;
};

export const clearCards = (cardArray: CardData[][]) => {
  cardArray.splice(0, cardArray.length);
};

export const setCardArray = (row: number, col: number, cardAmount: number) => {
  const cards: CardData[][] = [];
  const imageIds = shuffleCards(cardAmount);

  for (let i = 0; i < row; i++) {
    const rowArray: CardData[] = [];
    for (let j = 0; j < col; j++) {
      rowArray.push({
        id: i * col + j,
        imageId: imageIds[i * col + j],
        flipped: false,
        matched: false,
      });
    }
    cards.push(rowArray);
    console.log(cards);
  }
  return cards;
};

export const getGridSize = (
  conWidth: number,
  minCardSize: number,
  gapSize: number,
  cardAmount: number,
) => {
  const divisors = [];
  for (let i = 1; i < cardAmount / 2; i++) {
    if (cardAmount % i === 0) {
      divisors.push(i);
      divisors.push(cardAmount / i);
    }
  }
  divisors.sort((a, b) => a - b);

  if (divisors.length === 3) {
    return [divisors[1], divisors[1]];
  } else {
    for (let i = divisors.length / 2 - 1; i > 0; i--) {
      const row = divisors[i];
      const col = divisors[divisors.length - 1 - i];

      if ((col - 1) * (minCardSize + gapSize) + minCardSize <= conWidth) {
        return [row, col];
      } else if (
        (row - 1) * (minCardSize + gapSize) + minCardSize <=
        conWidth
      ) {
        return [col, row];
      }
    }
  }

  return [0, 0];
};
