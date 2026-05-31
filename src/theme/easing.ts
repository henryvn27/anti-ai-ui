export const easing = {
  narrative: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
  hand: 'cubic-bezier(0.19, 1, 0.22, 1)',
  press: 'cubic-bezier(0.28, 0.02, 0.18, 1.12)',
  tilt: 'cubic-bezier(0.16, 0.84, 0.34, 1)',
  snap: 'cubic-bezier(0.77, 0, 0.175, 1)'
} as const;

export type AntiEasing = keyof typeof easing;
