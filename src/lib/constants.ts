/**
 * Game Constants
 */
export const GameDifficulty = {
  Casual: {
    Easy: {
      MatchP: 10,
      MismatchP: -2,
    },
    Normal: {
      MatchP: 10,
      MismatchP: -5,
    },
    Hard: {
      MatchP: 10,
      MismatchP: -8,
    },
  },
  Hardcore: {
    Easy: {
      StartingP: 50,
      MismatchP: -2,
    },
    Normal: {
      StartingP: 50,
      MismatchP: -5,
    },
    Hard: {
      MatchP: 50,
      MismatchP: -8,
    },
  },
} as const;

/**
 * Card Constants
 */
export const CardFlipShownMilisec = 800;
export const CardAmount = {
  Default: 12,
  Min: 8,
  Max: 24,
  Multiplier: 4,
} as const;
export const CardImage = [
  "/characters/1.png",
  "/characters/2.png",
  "/characters/3.png",
  "/characters/4.png",
  "/characters/5.png",
  "/characters/6.png",
  "/characters/7.png",
  "/characters/8.png",
  "/characters/9.png",
  "/characters/10.png",
  "/characters/11.png",
  "/characters/12.png",
];

/**
 * Register Constants
 */
export const RegisterIdMinLength = 4;
export const RegisterPwdMinLength = 8;
