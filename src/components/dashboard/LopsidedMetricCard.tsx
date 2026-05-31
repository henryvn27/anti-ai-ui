import styled from '@emotion/styled';
import { color, easing, typography } from '../../theme';

export type LopsidedMetricCardProps = {
  label: string;
  value: string;
  detail?: string;
  trend?: string;
  emphasis?: 'normal' | 'critical' | 'quiet';
};

const Card = styled.article<{ emphasis: NonNullable<LopsidedMetricCardProps['emphasis']> }>`
  border: 1px solid ${color.line};
  border-radius: 2px 18px 7px 4px;
  background: ${({ emphasis }) => (emphasis === 'critical' ? color.oxblood : emphasis === 'quiet' ? color.chalk : color.blueBlack)};
  color: ${({ emphasis }) => (emphasis === 'quiet' ? color.ink : color.chalk)};
  padding: 1.35rem 1rem 1.95rem 1.75rem;
  min-height: 12rem;
  transition:
    transform 180ms ${easing.hand},
    box-shadow 180ms ${easing.hand};

  &:hover {
    box-shadow: 8px 9px 0 ${color.shadow};
    transform: translateY(-3px) rotate(-0.35deg);
  }

  small {
    display: block;
    font-family: ${typography.fontMono};
    font-size: ${typography.scale.micro};
    letter-spacing: ${typography.tracking.label};
    text-transform: uppercase;
    opacity: 0.72;
  }

  strong {
    display: block;
    margin-top: 1.2rem;
    font-family: ${typography.fontDisplay};
    font-size: clamp(2.2rem, 5vw, 4.4rem);
    line-height: 0.9;
  }

  p {
    max-width: 24ch;
    margin: 1rem 0 0;
    font-family: ${typography.fontText};
    line-height: ${typography.leading.dense};
    opacity: 0.78;
  }

  span {
    display: inline-block;
    margin-top: 1.25rem;
    font-family: ${typography.fontMono};
    font-size: ${typography.scale.caption};
  }
`;

export function LopsidedMetricCard({ label, value, detail, trend, emphasis = 'normal' }: LopsidedMetricCardProps) {
  return (
    <Card emphasis={emphasis}>
      <small>{label}</small>
      <strong>{value}</strong>
      {detail ? <p>{detail}</p> : null}
      {trend ? <span>{trend}</span> : null}
    </Card>
  );
}
