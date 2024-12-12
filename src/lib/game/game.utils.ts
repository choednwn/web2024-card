import { CardAmount, CardImage, CardLayoutSize } from "@/lib/constants";
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

export const setCardArray = (cardAmount: number) => {
  const cards: CardData[][] = [];
  const layout =
    CardLayoutSize[(cardAmount - CardAmount.Min) / CardAmount.Multiplier];
  const row = layout[0];
  const col = layout[1];
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
  }

  return cards;
};
