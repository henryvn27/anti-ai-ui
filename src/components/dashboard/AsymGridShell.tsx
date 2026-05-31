import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { color, layout, spacing } from '../../theme';

export type AsymGridShellProps = {
  children: ReactNode;
  aside?: ReactNode;
  footer?: ReactNode;
};

const Shell = styled.section`
  display: grid;
  grid-template-columns: ${layout.dashboardColumns};
  grid-template-rows: ${layout.dashboardRows};
  gap: clamp(0.9rem, 2vw, 1.6rem);
  padding: clamp(1rem, 3vw, 2rem);
  background: ${color.paper};
  min-height: 32rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const Main = styled.div`
  grid-column: span 2;
  display: grid;
  gap: ${spacing.md};

  @media (max-width: 960px) {
    grid-column: auto;
  }
`;

const Aside = styled.aside`
  display: grid;
  gap: ${spacing.md};
  align-content: start;
`;

const Footer = styled.div`
  grid-column: 1 / -1;
`;

export function AsymGridShell({ children, aside, footer }: AsymGridShellProps) {
  return (
    <Shell>
      <Main>{children}</Main>
      {aside ? <Aside>{aside}</Aside> : null}
      {footer ? <Footer>{footer}</Footer> : null}
    </Shell>
  );
}
