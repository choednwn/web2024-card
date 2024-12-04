import { GameState } from "@/lib/constants";

export type GameData = {
  state: GameState;
  score: number;
  cards: CardData[][];
  cardsAmt: number;
  cardRows: number;
  cardCols: number;
};

export type CardData = {
  id: number;
  type: number;
  img: string;
};
