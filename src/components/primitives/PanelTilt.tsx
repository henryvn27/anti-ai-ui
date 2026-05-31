import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode } from 'react';
import { color, easing, layout } from '../../theme';

export type PanelTiltProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tilt?: 'left' | 'right' | 'none';
  tone?: 'paper' | 'moss' | 'blue';
};

const Panel = styled.div<{ tilt: NonNullable<PanelTiltProps['tilt']>; tone: NonNullable<PanelTiltProps['tone']> }>`
  border: 1px solid ${color.line};
  border-radius: ${layout.radius.tilt};
  background: ${({ tone }) => {
    if (tone === 'moss') return color.moss;
    if (tone === 'blue') return color.blueBlack;
    return color.chalk;
  }};
  color: ${({ tone }) => (tone === 'paper' ? color.ink : color.chalk)};
  padding: clamp(1rem, 3vw, 2.2rem);
  transform: ${({ tilt }) => {
    if (tilt === 'left') return 'perspective(800px) rotateY(-2deg) rotateZ(-0.6deg)';
    if (tilt === 'right') return 'perspective(800px) rotateY(2deg) rotateZ(0.6deg)';
    return 'none';
  }};
  transition: transform 240ms ${easing.tilt};

  &:hover {
    transform: ${({ tilt }) => {
      if (tilt === 'left') return 'perspective(800px) rotateY(-1deg) translateY(-2px)';
      if (tilt === 'right') return 'perspective(800px) rotateY(1deg) translateY(-2px)';
      return 'translateY(-2px)';
    }};
  }
`;

export function PanelTilt({ children, tilt = 'right', tone = 'paper', ...props }: PanelTiltProps) {
  return (
    <Panel tilt={tilt} tone={tone} {...props}>
      {children}
    </Panel>
  );
}
