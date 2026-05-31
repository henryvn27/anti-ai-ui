export const color = {
  ink: '#181612',
  inkMuted: '#575044',
  paper: '#f5f1e8',
  paperDeep: '#e7ddca',
  chalk: '#fffaf0',
  oxblood: '#7f1d1d',
  moss: '#475b3b',
  signal: '#d8942c',
  blueBlack: '#192530',
  line: '#cdbfaa',
  shadow: 'rgba(24, 22, 18, 0.18)',
  focus: '#1f6f78'
} as const;

export type AntiColor = keyof typeof color;
