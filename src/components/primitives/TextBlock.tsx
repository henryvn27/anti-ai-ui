import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode } from 'react';
import { color, typography } from '../../theme';

export type TextBlockProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  mood?: 'quiet' | 'loud' | 'dense' | 'editorial';
  align?: 'start' | 'center' | 'end';
};

const Block = styled.div<{ mood: NonNullable<TextBlockProps['mood']>; align: NonNullable<TextBlockProps['align']> }>`
  max-width: ${({ mood }) => (mood === 'dense' ? '54ch' : '68ch')};
  text-align: ${({ align }) => align};
  color: ${color.ink};

  small {
    display: block;
    margin-bottom: 0.75rem;
    color: ${color.oxblood};
    font-family: ${typography.fontMono};
    font-size: ${typography.scale.micro};
    letter-spacing: ${typography.tracking.label};
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-family: ${typography.fontDisplay};
    font-size: ${({ mood }) => (mood === 'loud' ? typography.scale.h1 : typography.scale.h2)};
    line-height: ${({ mood }) => (mood === 'loud' ? typography.leading.tight : typography.leading.display)};
    letter-spacing: ${typography.tracking.loud};
  }

  p {
    margin: 1rem 0 0;
    color: ${color.inkMuted};
    font-family: ${typography.fontText};
    font-size: ${({ mood }) => (mood === 'dense' ? typography.scale.body : typography.scale.bodyLarge)};
    line-height: ${({ mood }) => (mood === 'dense' ? typography.leading.dense : typography.leading.body)};
  }
`;

export function TextBlock({ eyebrow, title, children, mood = 'editorial', align = 'start', ...props }: TextBlockProps) {
  return (
    <Block mood={mood} align={align} {...props}>
      {eyebrow ? <small>{eyebrow}</small> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </Block>
  );
}
