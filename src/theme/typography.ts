export const typography = {
  fontDisplay: '"Fraunces", "Iowan Old Style", Georgia, serif',
  fontText: '"Inter Tight", "Avenir Next", system-ui, sans-serif',
  fontMono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',
  scale: {
    micro: '0.72rem',
    caption: '0.84rem',
    body: '1rem',
    bodyLarge: '1.13rem',
    h4: '1.38rem',
    h3: '1.77rem',
    h2: '2.42rem',
    h1: 'clamp(3.4rem, 8.8vw, 7.8rem)'
  },
  leading: {
    tight: 0.88,
    display: 0.94,
    body: 1.55,
    dense: 1.28,
    loose: 1.72
  },
  tracking: {
    loud: '-0.026em',
    tight: '-0.012em',
    normal: '0',
    label: '0.075em'
  }
} as const;

export type TextMood = 'quiet' | 'loud' | 'dense' | 'editorial';
