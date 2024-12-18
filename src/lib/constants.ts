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
 * Fun messages
 */

export const FunMessages = [
  "꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다",
  "나도 한때는 그의 손을 잡고~",
  "오징어 땅콩 빨리 먹기!",
  "박하스인가? 박카스인가? 그것이 문제로다",
  "예감 맛없어",
  '민zu씨: \"문제가 뭔지 알아? ctrl-c, ctrl-v가 안돼\"',
  "과연 언제 끝날까?",
  "저 근데 HTML, CSS, 자바스크립트로 해도되나여? (그게 뭐예여)"
];
