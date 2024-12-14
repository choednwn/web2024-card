export type UserStore = {
  userId: string;
  pwdHash: string;
  sessionValidated: boolean;
  highScore: number;
  gamesPlayed: number;
  //! 더 생각나면 추가~
};
