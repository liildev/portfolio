export const shuffle = <T>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);
