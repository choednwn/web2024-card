export type LoginStore = {
  userId: string | null;
  sessionHash: string | null;
  isAuthenticated: boolean;
  loginFailed: boolean;
  validateLocalAuth: () => void;
  register: (userId: string, pwdHash: string) => void;
  login: (userId: string, pwdHash: string) => void;
  logout: () => void;
  // profile: () => void;
};
