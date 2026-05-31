export const spacing = {
  hair: '0.18rem',
  xs: '0.42rem',
  sm: '0.72rem',
  md: '1.15rem',
  lg: '1.85rem',
  xl: '3.1rem',
  xxl: '5.4rem',
  section: 'clamp(4.8rem, 9vw, 9.5rem)'
} as const;

export const irregularGaps = ['0.72rem', '1.35rem', '2.15rem', '3.65rem', '5.4rem'] as const;

export type AntiSpacing = keyof typeof spacing;
