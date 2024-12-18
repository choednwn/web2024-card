export type LocalSessionData = {
  userId: string;
  sessionToken: string;
};

export type UserStore = {
  userId: string;
  sessionToken: string;
  sessionValid: boolean;
  highScore: number;
  gamesPlayed: number;
  //! 더 생각나면 추가~
  setUserId: (userId: string) => void;
  setSessionToken: (token: string) => void;
  setSessionValidated: (validated: boolean) => void;
  // setHighScore: (score: number) => void;

  storeToLocal: (userId: string, sessionToken: string) => void;
  grabFromLocal: () => LocalSessionData | null;
};
