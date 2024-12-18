export type UserStore = {
  userId: string;
  sessionValidated: boolean;
  sessionToken: string;
  highScore: number;
  gamesPlayed: number;
  //! 더 생각나면 추가~

  login: (userId: string, pwdHash: string) => boolean;
};
