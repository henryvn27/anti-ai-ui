import styled from '@emotion/styled';
import { color, easing, spacing, typography } from '../../theme';

export type OffsetFeature = {
  title: string;
  body: string;
  weight?: 'narrow' | 'wide' | 'tall';
};

export type OffsetFeatureStripProps = {
  features: OffsetFeature[];
};

const Strip = styled.section`
  display: grid;
  grid-template-columns: 1.05fr 0.72fr 1.22fr;
  gap: clamp(0.9rem, 2.8vw, 2.4rem);
  padding: clamp(2rem, 6vw, 5rem);
  background: ${color.chalk};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.article<{ index: number; weight: NonNullable<OffsetFeature['weight']> }>`
  min-height: ${({ weight }) => (weight === 'tall' ? '18rem' : '13rem')};
  padding: ${({ weight }) => (weight === 'wide' ? '2rem 2.4rem 1.5rem' : '1.4rem 1.2rem 1.75rem')};
  border-left: 2px solid ${color.oxblood};
  background: ${({ index }) => (index % 2 === 0 ? color.paper : color.paperDeep)};
  transform: translateY(${({ index }) => (index % 2 === 0 ? '-1.1rem' : '1.45rem')});
  transition: transform 220ms ${easing.hand};

  &:hover {
    transform: translateY(${({ index }) => (index % 2 === 0 ? '-1.45rem' : '1rem')}) rotate(${({ index }) => (index % 2 === 0 ? '-0.4deg' : '0.4deg')});
  }

  h3 {
    margin: 0;
    color: ${color.ink};
    font-family: ${typography.fontDisplay};
    font-size: ${typography.scale.h4};
    line-height: ${typography.leading.display};
  }

  p {
    margin: ${spacing.md} 0 0;
    color: ${color.inkMuted};
    font-family: ${typography.fontText};
    line-height: ${typography.leading.body};
  }

  @media (max-width: 860px) {
    transform: none;
  }
`;

export function OffsetFeatureStrip({ features }: OffsetFeatureStripProps) {
  return (
    <Strip>
      {features.map((feature, index) => (
        <Feature key={feature.title} index={index} weight={feature.weight ?? 'narrow'}>
          <h3>{feature.title}</h3>
          <p>{feature.body}</p>
        </Feature>
      ))}
    </Strip>
  );
}
