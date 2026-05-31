import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import {
  AntiHero,
  AsymGridShell,
  ButtonWarp,
  LopsidedMetricCard,
  OffsetFeatureStrip,
  PanelTilt,
  SkewedTimeline,
  StackOffset,
  TextBlock,
  ZigZagNarrative,
  color,
  spacing,
  typography
} from '../src';

type Route = 'start' | 'philosophy' | 'landing' | 'dashboard' | 'primitives' | 'guides';

const routes: { id: Route; label: string }[] = [
  { id: 'start', label: 'Getting Started' },
  { id: 'philosophy', label: 'Design Philosophy' },
  { id: 'landing', label: 'Landing Patterns' },
  { id: 'dashboard', label: 'Dashboard Patterns' },
  { id: 'primitives', label: 'Primitives' },
  { id: 'guides', label: 'Guides' }
];

const Shell = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(12rem, 16rem) minmax(0, 1fr);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 1.2rem;
  border-right: 1px solid ${color.line};
  background: ${color.chalk};

  h1 {
    margin: 0 0 1.6rem;
    font-family: ${typography.fontDisplay};
    font-size: 1.52rem;
    line-height: 1;
  }

  button {
    display: block;
    width: 100%;
    margin: 0.25rem 0;
    border: 0;
    border-left: 2px solid transparent;
    background: transparent;
    color: ${color.ink};
    cursor: pointer;
    font-family: ${typography.fontMono};
    font-size: 0.78rem;
    padding: 0.7rem 0.7rem 0.7rem 0.85rem;
    text-align: left;
  }

  button[data-active='true'] {
    border-left-color: ${color.oxblood};
    background: ${color.paperDeep};
  }

  @media (max-width: 860px) {
    position: static;
    height: auto;
  }
`;

const Main = styled.main`
  min-width: 0;
`;

const Page = styled.section`
  padding: clamp(2rem, 6vw, 5rem);

  > h2 {
    max-width: 13ch;
    margin: 0;
    font-family: ${typography.fontDisplay};
    font-size: clamp(2.6rem, 7vw, 5.8rem);
    line-height: 0.92;
    letter-spacing: ${typography.tracking.loud};
  }

  > p {
    max-width: 64ch;
    color: ${color.inkMuted};
    font-size: ${typography.scale.bodyLarge};
    line-height: ${typography.leading.body};
  }
`;

const Code = styled.pre`
  overflow: auto;
  border: 1px solid ${color.line};
  background: ${color.blueBlack};
  color: ${color.chalk};
  padding: 1rem;
  font-size: 0.82rem;
  line-height: 1.55;
`;

const DemoFrame = styled.div`
  margin: ${spacing.xl} 0;
  border: 1px solid ${color.line};
  background: ${color.paper};
`;

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: ${spacing.lg};
  margin-top: ${spacing.xl};

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const featureData = [
  { title: 'Hierarchy before symmetry', body: 'The biggest idea gets the most space; secondary proof gets the odd corner.', weight: 'wide' as const },
  { title: 'Irregular rhythm', body: 'Spacing follows reading pressure instead of a rigid utility scale.' },
  { title: 'No fake polish', body: 'The components expose product-specific structure rather than generic startup decoration.', weight: 'tall' as const }
];

const timelineData = [
  { time: '08:40', title: 'Incident opened', body: 'A checkout spike needs attention before dashboard cleanup.' },
  { time: '09:15', title: 'Owner assigned', body: 'The task moves to the person who can make the call.' },
  { time: '10:05', title: 'Evidence posted', body: 'The timeline bends around what changed, not around equal slots.' }
];

function Start() {
  return (
    <>
      <AntiHero
        title="UI patterns with a point of view"
        proof="Built as a companion to hvn-framework: calibrate first, design from content, and avoid interchangeable frontend output."
        visual={
          <PanelTilt tone="blue">
            <TextBlock title="Not a prettier card kit" mood="dense">
              Use these components when you need layout decisions that feel argued for, not generated from a default prompt.
            </TextBlock>
          </PanelTilt>
        }
      >
        React components for landing pages, dashboards, and modular UI that avoid generic gradients, perfect grids, and hollow startup copy.
      </AntiHero>
      <Page>
        <h2>Install</h2>
        <Code>{`npm install hvn-anti-ai-ui @emotion/react @emotion/styled`}</Code>
        <Code>{`import { AntiHero, ButtonWarp } from 'hvn-anti-ai-ui';`}</Code>
      </Page>
    </>
  );
}

function Philosophy() {
  return (
    <Page>
      <h2>Design from evidence, not defaults</h2>
      <p>
        The library rejects the common AI frontend pattern: centered hero, gradient wash, three equal feature cards, icon circles, and copy that
        could describe any product. The components start from hierarchy, content shape, and audience trust.
      </p>
      <GuideGrid>
        <PanelTilt>
          <TextBlock title="What generic output does">
            It makes every section equally smooth. Nothing feels wrong, but nothing feels chosen.
          </TextBlock>
        </PanelTilt>
        <PanelTilt tilt="left" tone="moss">
          <TextBlock title="What we do instead">
            Break symmetry where hierarchy demands it. Use irregular rhythm, concrete copy, and components that tolerate messy content.
          </TextBlock>
        </PanelTilt>
      </GuideGrid>
    </Page>
  );
}

function Landing() {
  const code = `import { AntiHero, OffsetFeatureStrip, ZigZagNarrative, PanelTilt, TextBlock } from 'hvn-anti-ai-ui';

export function LandingPage() {
  return (
    <>
      <AntiHero title="Debug the real session">
        Lead with the product's actual evidence, not a generic productivity promise.
      </AntiHero>
      <OffsetFeatureStrip features={features} />
      <ZigZagNarrative items={items} />
    </>
  );
}`;

  return (
    <Page>
      <h2>Landing patterns</h2>
      <p>Use these when the page needs a sharper first impression than a centered hero and three identical cards.</p>
      <DemoFrame>
        <AntiHero
          title="Debug the real session"
          actionLabel="Run a trace"
          secondaryLabel="Inspect example"
          visual={
            <PanelTilt tone="blue">
              <TextBlock title="Stack trace first" mood="dense">
                The page leads with evidence: failing route, user impact, and next action.
              </TextBlock>
            </PanelTilt>
          }
        >
          Show the user's actual problem before selling the system. The asymmetry lets the diagnostic artifact carry more weight than the pitch.
        </AntiHero>
        <OffsetFeatureStrip features={featureData} />
        <ZigZagNarrative
          items={[
            { title: 'Start with the ugly truth', body: 'The strongest page section is often the one that admits the operational mess.' },
            { title: 'Let proof interrupt symmetry', body: 'Screens, logs, quotes, and metrics should change the layout instead of filling a slot.' }
          ]}
        />
      </DemoFrame>
      <Code>{code}</Code>
    </Page>
  );
}

function Dashboard() {
  const code = `import { AsymGridShell, LopsidedMetricCard, SkewedTimeline } from 'hvn-anti-ai-ui';

export function OpsDashboard() {
  return (
    <AsymGridShell aside={<SkewedTimeline items={timeline} />}>
      <LopsidedMetricCard label="At risk" value="17" detail="Invoices blocked by missing approval." emphasis="critical" />
      <LopsidedMetricCard label="Clean" value="82%" trend="+6.4% since Monday" />
    </AsymGridShell>
  );
}`;

  return (
    <Page>
      <h2>Dashboard patterns</h2>
      <p>Operational screens need hierarchy, not equal widgets. These patterns make the most important state visually dominant.</p>
      <DemoFrame>
        <AsymGridShell
          aside={<SkewedTimeline items={timelineData} />}
          footer={<LopsidedMetricCard label="Review lane" value="6" detail="Items that need human judgment before automation continues." emphasis="quiet" />}
        >
          <LopsidedMetricCard label="At risk" value="17" detail="Invoices blocked by missing approval." emphasis="critical" trend="Review before noon" />
          <LopsidedMetricCard label="Clean" value="82%" detail="Reconciled without manual edits." trend="+6.4% since Monday" />
        </AsymGridShell>
      </DemoFrame>
      <Code>{code}</Code>
    </Page>
  );
}

function Primitives() {
  const code = `import { ButtonWarp, PanelTilt, StackOffset, TextBlock } from 'hvn-anti-ai-ui';

export function PrimitiveSet() {
  return (
    <StackOffset>
      <PanelTilt>
        <TextBlock title="A panel with intent">Useful friction beats default smoothness.</TextBlock>
        <ButtonWarp variant="signal">Commit the choice</ButtonWarp>
      </PanelTilt>
    </StackOffset>
  );
}`;

  return (
    <Page>
      <h2>Primitives</h2>
      <p>Small pieces for controlled imperfection: warped buttons, tilted panels, offset stacks, and typography with a real voice.</p>
      <DemoFrame>
        <StackOffset>
          <PanelTilt>
            <TextBlock title="Quiet but not blank">A panel can feel human without pretending to be handmade.</TextBlock>
            <ButtonWarp variant="signal">Commit the choice</ButtonWarp>
          </PanelTilt>
          <PanelTilt tilt="left" tone="moss">
            <TextBlock title="More editorial" mood="dense">
              Use restrained asymmetry where the content deserves a pause.
            </TextBlock>
          </PanelTilt>
        </StackOffset>
      </DemoFrame>
      <Code>{code}</Code>
    </Page>
  );
}

function Guides() {
  return (
    <Page>
      <h2>Checks before ship</h2>
      <p>Use the components with judgment. Breaking convention helps only when it clarifies hierarchy or gives the product a more credible voice.</p>
      <GuideGrid>
        <PanelTilt>
          <TextBlock title="Design checklist">
            Did you avoid the generic three-card row, default gradients, perfect symmetry, and icon circles? Is the most important content dominant?
          </TextBlock>
        </PanelTilt>
        <PanelTilt tilt="left">
          <TextBlock title="Writing checklist">
            Did you remove vague words like powerful, seamless, and next-generation unless you can prove them with specifics?
          </TextBlock>
        </PanelTilt>
      </GuideGrid>
    </Page>
  );
}

export function App() {
  const [route, setRoute] = useState<Route>('start');
  const page = useMemo(() => {
    if (route === 'philosophy') return <Philosophy />;
    if (route === 'landing') return <Landing />;
    if (route === 'dashboard') return <Dashboard />;
    if (route === 'primitives') return <Primitives />;
    if (route === 'guides') return <Guides />;
    return <Start />;
  }, [route]);

  return (
    <Shell>
      <Nav aria-label="Documentation">
        <h1>HVN Anti-AI UI</h1>
        {routes.map((item) => (
          <button key={item.id} data-active={route === item.id} onClick={() => setRoute(item.id)}>
            {item.label}
          </button>
        ))}
      </Nav>
      <Main>{page}</Main>
    </Shell>
  );
}
