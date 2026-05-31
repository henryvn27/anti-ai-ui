export type OffsetRule = {
  x?: number;
  y?: number;
  rotate?: number;
};

export function offsetTransform(rule: OffsetRule): string {
  const x = rule.x ?? 0;
  const y = rule.y ?? 0;
  const rotate = rule.rotate ?? 0;
  return `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;
}

export function clampTrack(min: number, preferred: number, max: number): string {
  return `clamp(${min}rem, ${preferred}vw, ${max}rem)`;
}
