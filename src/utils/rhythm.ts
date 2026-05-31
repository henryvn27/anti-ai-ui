import { irregularGaps } from '../theme/spacing';

export function rhythm(index: number, multiplier = 1): string {
  const value = irregularGaps[index % irregularGaps.length];
  return `calc(${value} * ${multiplier})`;
}

export function stagger(index: number, size = 13): string {
  const direction = index % 2 === 0 ? 1 : -1;
  const extra = index % 3 === 0 ? 0.55 : 1;
  return `${direction * size * extra}px`;
}
