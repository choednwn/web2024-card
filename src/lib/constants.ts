/**
 * Game Constants
 */
export const Points = {
  Casual: {
    StartingPoints: 30,
    Match: 10,
    Mismatch: -5,
  },
  Hardcore: {
    Multiplier: 3,
    PointsPerCard: 3, // 카드 개수 * PointesPerCard => 시작 점수
    Mismatch: -3,
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
