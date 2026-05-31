import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { ButtonWarp } from '../primitives/ButtonWarp';
import { color, easing, layout, spacing, typography } from '../../theme';

export type AntiHeroProps = {
  title: ReactNode;
  children: ReactNode;
  actionLabel?: string;
  secondaryLabel?: string;
  proof?: ReactNode;
  visual?: ReactNode;
  align?: 'left' | 'right';
};

const Shell = styled.section<{ align: NonNullable<AntiHeroProps['align']> }>`
  display: grid;
  grid-template-columns: ${({ align }) =>
    align === 'left' ? layout.asymColumns : 'minmax(18rem, 0.72fr) minmax(0, 1.28fr)'};
  gap: clamp(2rem, 7vw, 6rem);
  min-height: 74vh;
  align-items: center;
  padding: ${spacing.section} clamp(1.1rem, 4vw, 4rem);
  background:
    linear-gradient(90deg, rgba(127, 29, 29, 0.08), transparent 42%),
    ${color.paper};
  overflow: hidden;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const Copy = styled.div<{ align: NonNullable<AntiHeroProps['align']> }>`
  grid-column: ${({ align }) => (align === 'left' ? '1' : '2')};
  transform: translateY(-3.5vh);
  animation: enterCopy 620ms ${easing.narrative} both;

  h1 {
    margin: 0;
    max-width: 10ch;
    color: ${color.ink};
    font-family: ${typography.fontDisplay};
    font-size: ${typography.scale.h1};
    line-height: ${typography.leading.tight};
    letter-spacing: ${typography.tracking.loud};
  }

  p {
    max-width: 42rem;
    margin: 1.35rem 0 0;
    color: ${color.inkMuted};
    font-family: ${typography.fontText};
    font-size: ${typography.scale.bodyLarge};
    line-height: ${typography.leading.body};
  }

  @keyframes enterCopy {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(-3.5vh);
    }
  }

  @media (max-width: 820px) {
    grid-column: 1;
    transform: none;

    h1 {
      max-width: 11ch;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem 1.2rem;
  margin-top: 2rem;
  align-items: center;
`;

const Secondary = styled.a`
  color: ${color.ink};
  font-family: ${typography.fontMono};
  font-size: ${typography.scale.caption};
  text-decoration-thickness: 1px;
  text-underline-offset: 0.34rem;
`;

const Visual = styled.div<{ align: NonNullable<AntiHeroProps['align']> }>`
  grid-column: ${({ align }) => (align === 'left' ? '2' : '1')};
  align-self: stretch;
  display: grid;
  align-items: end;
  transform: translateY(5vh) rotate(-1.4deg);

  @media (max-width: 820px) {
    grid-column: 1;
    transform: rotate(-0.7deg);
  }
`;

const Proof = styled.div`
  margin-top: 2.6rem;
  max-width: 32rem;
  color: ${color.inkMuted};
  font-family: ${typography.fontMono};
  font-size: ${typography.scale.caption};
  line-height: ${typography.leading.dense};
`;

export function AntiHero({
  title,
  children,
  actionLabel = 'Use the pattern',
  secondaryLabel = 'Read the logic',
  proof,
  visual,
  align = 'left'
}: AntiHeroProps) {
  return (
    <Shell align={align}>
      <Copy align={align}>
        <h1>{title}</h1>
        <p>{children}</p>
        <Actions>
          <ButtonWarp>{actionLabel}</ButtonWarp>
          <Secondary href="#logic">{secondaryLabel}</Secondary>
        </Actions>
        {proof ? <Proof>{proof}</Proof> : null}
      </Copy>
      <Visual align={align}>{visual}</Visual>
    </Shell>
  );
}
