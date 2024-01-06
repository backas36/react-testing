export const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// 0.5 * (5-3+1) + 3 = 4
// 0.6 * (5-3+1) + 3 = 4
// 0.7 * (5-3+1) + 3 = 5
// 0.8 * (5-3+1) + 3 = 5
// 0.99 * (5-3+1) + 3 = 5
