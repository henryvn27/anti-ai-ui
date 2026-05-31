import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { color, spacing, typography } from '../../theme';

export type NarrativeItem = {
  title: string;
  body: string;
  media?: ReactNode;
};

export type ZigZagNarrativeProps = {
  items: NarrativeItem[];
};

const Section = styled.section`
  display: grid;
  gap: ${spacing.xl};
  padding: ${spacing.section} clamp(1.1rem, 4vw, 4rem);
  background: ${color.paper};
`;

const Row = styled.article<{ index: number }>`
  display: grid;
  grid-template-columns: ${({ index }) => (index % 2 === 0 ? '0.92fr 1.18fr' : '1.24fr 0.76fr')};
  gap: clamp(1.6rem, 6vw, 5rem);
  align-items: center;
  margin-left: ${({ index }) => (index % 2 === 0 ? '0' : 'clamp(0rem, 6vw, 5rem)')};

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    margin-left: 0;
  }
`;

const Copy = styled.div`
  h3 {
    margin: 0;
    color: ${color.ink};
    font-family: ${typography.fontDisplay};
    font-size: ${typography.scale.h3};
    line-height: ${typography.leading.display};
    letter-spacing: ${typography.tracking.tight};
  }

  p {
    margin: ${spacing.md} 0 0;
    color: ${color.inkMuted};
    font-family: ${typography.fontText};
    font-size: ${typography.scale.bodyLarge};
    line-height: ${typography.leading.body};
  }
`;

const Media = styled.div<{ index: number }>`
  min-height: 15rem;
  border: 1px solid ${color.line};
  background: ${({ index }) => (index % 2 === 0 ? color.blueBlack : color.moss)};
  color: ${color.chalk};
  padding: ${spacing.lg};
  transform: rotate(${({ index }) => (index % 2 === 0 ? '1.1deg' : '-0.8deg')});
`;

export function ZigZagNarrative({ items }: ZigZagNarrativeProps) {
  return (
    <Section>
      {items.map((item, index) => (
        <Row key={item.title} index={index}>
          <Copy>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Copy>
          <Media index={index}>{item.media}</Media>
        </Row>
      ))}
    </Section>
  );
}
