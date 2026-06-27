export type AntiThemeName = 'operator' | 'botanical' | 'midnight';

export type AntiTheme = {
  name: string;
  description: string;
  palette: {
    ink: string;
    paper: string;
    surface: string;
    muted: string;
    accent: string;
    accentDeep: string;
    line: string;
  };
  typography: {
    display: string;
    body: string;
    mono: string;
  };
  rhythm: {
    section: string;
    card: string;
    detail: string;
  };
  bestFor: readonly string[];
};

export const themeFactoryPresets: Record<AntiThemeName, AntiTheme> = {
  operator: {
    name: 'Operator Ledger',
    description: 'Dense, evidence-first UI for launch rooms, incident review, and internal tools.',
    palette: {
      ink: '#17130f',
      paper: '#f3eee3',
      surface: '#fffaf0',
      muted: '#5d5548',
      accent: '#b1462f',
      accentDeep: '#6f221b',
      line: '#cdbfaa'
    },
    typography: {
      display: '"Fraunces", "Iowan Old Style", Georgia, serif',
      body: '"Inter Tight", "Avenir Next", system-ui, sans-serif',
      mono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace'
    },
    rhythm: {
      section: 'clamp(3.8rem, 8vw, 8rem)',
      card: 'clamp(1rem, 2.4vw, 1.8rem)',
      detail: '0.72rem'
    },
    bestFor: ['release rooms', 'review queues', 'compliance intake']
  },
  botanical: {
    name: 'Botanical Interruption',
    description: 'Warm organic contrast for editorial product pages that need to avoid sterile AI polish.',
    palette: {
      ink: '#182016',
      paper: '#f4efdf',
      surface: '#fff8e8',
      muted: '#59624a',
      accent: '#697b3b',
      accentDeep: '#35451f',
      line: '#c5b994'
    },
    typography: {
      display: '"Fraunces", "Iowan Old Style", Georgia, serif',
      body: '"Inter Tight", "Avenir Next", system-ui, sans-serif',
      mono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace'
    },
    rhythm: {
      section: 'clamp(4.4rem, 9vw, 9.2rem)',
      card: 'clamp(1.2rem, 3vw, 2.1rem)',
      detail: '0.86rem'
    },
    bestFor: ['case studies', 'portfolio systems', 'service explainers']
  },
  midnight: {
    name: 'Midnight Proof',
    description: 'Dark, exact, and non-glossy for technical narratives and command surfaces.',
    palette: {
      ink: '#eef1ea',
      paper: '#111820',
      surface: '#192530',
      muted: '#aeb8b1',
      accent: '#d8942c',
      accentDeep: '#8e4f15',
      line: '#31404b'
    },
    typography: {
      display: '"Fraunces", "Iowan Old Style", Georgia, serif',
      body: '"Inter Tight", "Avenir Next", system-ui, sans-serif',
      mono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace'
    },
    rhythm: {
      section: 'clamp(3.6rem, 7vw, 7rem)',
      card: 'clamp(0.95rem, 2.2vw, 1.6rem)',
      detail: '0.64rem'
    },
    bestFor: ['debug surfaces', 'technical launches', 'security review']
  }
} as const;

export function createAntiTheme(name: AntiThemeName): AntiTheme {
  return themeFactoryPresets[name];
}

export function themeToCssVars(theme: AntiTheme): Record<string, string> {
  return {
    '--anti-ink': theme.palette.ink,
    '--anti-paper': theme.palette.paper,
    '--anti-surface': theme.palette.surface,
    '--anti-muted': theme.palette.muted,
    '--anti-accent': theme.palette.accent,
    '--anti-accent-deep': theme.palette.accentDeep,
    '--anti-line': theme.palette.line,
    '--anti-font-display': theme.typography.display,
    '--anti-font-body': theme.typography.body,
    '--anti-font-mono': theme.typography.mono,
    '--anti-section-rhythm': theme.rhythm.section,
    '--anti-card-rhythm': theme.rhythm.card,
    '--anti-detail-rhythm': theme.rhythm.detail
  };
}
