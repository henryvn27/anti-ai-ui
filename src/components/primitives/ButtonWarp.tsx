import styled from '@emotion/styled';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { color, easing, typography } from '../../theme';

export type ButtonWarpProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'ink' | 'paper' | 'signal';
};

const Button = styled.button<{ variant: NonNullable<ButtonWarpProps['variant']> }>`
  border: 1px solid ${({ variant }) => (variant === 'paper' ? color.line : color.ink)};
  border-radius: 2px 14px 5px 10px;
  background: ${({ variant }) => {
    if (variant === 'paper') return color.chalk;
    if (variant === 'signal') return color.signal;
    return color.ink;
  }};
  color: ${({ variant }) => (variant === 'ink' ? color.chalk : color.ink)};
  cursor: pointer;
  font-family: ${typography.fontMono};
  font-size: ${typography.scale.caption};
  letter-spacing: 0.035em;
  padding: 0.78rem 1.18rem 0.66rem 1.04rem;
  transform: skewX(-2deg);
  transition:
    transform 180ms ${easing.press},
    box-shadow 180ms ${easing.hand},
    background 180ms ${easing.narrative};

  &:hover {
    box-shadow: 5px 6px 0 ${color.shadow};
    transform: translateY(-2px) skewX(-2deg);
  }

  &:active {
    box-shadow: 2px 3px 0 ${color.shadow};
    transform: translateY(1px) skewX(-1deg);
  }

  &:focus-visible {
    outline: 3px solid ${color.focus};
    outline-offset: 3px;
  }
`;

export function ButtonWarp({ variant = 'ink', children, ...props }: ButtonWarpProps) {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
}
