import styled from '@emotion/styled';
import { color, spacing, typography } from '../../theme';

export type TimelineItem = {
  time: string;
  title: string;
  body: string;
};

export type SkewedTimelineProps = {
  items: TimelineItem[];
};

const Timeline = styled.ol`
  list-style: none;
  margin: 0;
  padding: ${spacing.md};
  border-left: 2px solid ${color.ink};
  background: ${color.chalk};
`;

const Item = styled.li<{ index: number }>`
  position: relative;
  margin: ${({ index }) => (index % 2 === 0 ? '0 0 2.2rem 1.4rem' : '0 0 1.25rem 2.5rem')};
  padding: 0.35rem 0 0.75rem;

  &::before {
    content: '';
    position: absolute;
    left: ${({ index }) => (index % 2 === 0 ? '-1.9rem' : '-3rem')};
    top: 0.55rem;
    width: ${({ index }) => (index % 2 === 0 ? '1.3rem' : '2.4rem')};
    height: 2px;
    background: ${color.oxblood};
    transform: rotate(${({ index }) => (index % 2 === 0 ? '-18deg' : '12deg')});
  }

  small {
    font-family: ${typography.fontMono};
    font-size: ${typography.scale.micro};
    letter-spacing: ${typography.tracking.label};
    color: ${color.oxblood};
  }

  h4 {
    margin: 0.28rem 0 0;
    font-family: ${typography.fontDisplay};
    font-size: ${typography.scale.h4};
    line-height: ${typography.leading.display};
  }

  p {
    margin: 0.5rem 0 0;
    color: ${color.inkMuted};
    font-family: ${typography.fontText};
    line-height: ${typography.leading.body};
  }
`;

export function SkewedTimeline({ items }: SkewedTimelineProps) {
  return (
    <Timeline>
      {items.map((item, index) => (
        <Item key={`${item.time}-${item.title}`} index={index}>
          <small>{item.time}</small>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </Item>
      ))}
    </Timeline>
  );
}
