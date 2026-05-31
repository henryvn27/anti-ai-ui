import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode } from 'react';
import { spacing } from '../../theme';
import { stagger } from '../../utils/rhythm';

export type StackOffsetProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  axis?: 'x' | 'y';
  intensity?: number;
};

const Stack = styled.div<{ axis: NonNullable<StackOffsetProps['axis']>; intensity: number }>`
  display: grid;
  gap: ${spacing.md};

  > * {
    min-width: 0;
  }

  > *:nth-of-type(2n) {
    transform: ${({ axis, intensity }) =>
      axis === 'x' ? `translateX(${stagger(1, intensity)})` : `translateY(${stagger(1, intensity)})`};
  }

  > *:nth-of-type(3n) {
    transform: ${({ axis, intensity }) =>
      axis === 'x' ? `translateX(${stagger(2, intensity)})` : `translateY(${stagger(2, intensity)})`};
  }
`;

export function StackOffset({ children, axis = 'x', intensity = 14, ...props }: StackOffsetProps) {
  return (
    <Stack axis={axis} intensity={intensity} {...props}>
      {children}
    </Stack>
  );
}
