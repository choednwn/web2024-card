export const RegisterSettings = {
  idMinLength: 4,
  pwdMinLength: 8,
} as const;

/**
 * 게임 점수 설정
 */
export const ScoreOnMatch = 10;
export const ScoreOnMismatch = -5;

/**
 * 카드 Image Src
 */
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
] as const;

/**
 * 카트 세로, 가로 개수
 * - 약수 구하고 중간 2개 선택 가능하지만,
 *   최대 카드 개수 24개로 제한해서 굳이 할 필요 없을 듯..
 */
export const CardLayoutSize = [
  [2, 4], // 8
  [3, 4], // 12
  [4, 4], // 16
  [4, 5], // 20
  [4, 6], // 24
] as const;

export const CardAmount = {
  Default: 12,
  Min: 8,
  Max: 24,
  Multiplier: 4,
} as const;

export const CardFlipShowTime = 800;
