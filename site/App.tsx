import styled from '@emotion/styled';
import type { CSSProperties } from 'react';
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
  createAntiTheme,
  spacing,
  themeFactoryPresets,
  themeToCssVars,
  typography
} from '../src';

type Route = 'start' | 'philosophy' | 'landing' | 'dashboard' | 'primitives' | 'showcases' | 'themes' | 'guides';

const routes: { id: Route; label: string }[] = [
  { id: 'start', label: 'Getting Started' },
  { id: 'philosophy', label: 'Design Philosophy' },
  { id: 'landing', label: 'Landing Patterns' },
  { id: 'dashboard', label: 'Dashboard Patterns' },
  { id: 'primitives', label: 'Primitives' },
  { id: 'showcases', label: 'Showcases' },
  { id: 'themes', label: 'Theme Factory' },
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

const ShowcaseGrid = styled.div`
  display: grid;
  gap: clamp(1.2rem, 3vw, 2.2rem);
  margin-top: ${spacing.xl};
`;

const ShowcaseFrame = styled.article`
  border: 1px solid ${color.line};
  background: ${color.paper};

  > header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1rem;
    align-items: end;
    padding: clamp(1rem, 3vw, 2rem);
    border-bottom: 1px solid ${color.line};
    background: ${color.chalk};
  }

  h3 {
    max-width: 16ch;
    margin: 0;
    font-family: ${typography.fontDisplay};
    font-size: clamp(1.9rem, 4.5vw, 3.8rem);
    line-height: 0.94;
    letter-spacing: ${typography.tracking.tight};
  }

  small {
    color: ${color.oxblood};
    font-family: ${typography.fontMono};
    font-size: ${typography.scale.micro};
    letter-spacing: ${typography.tracking.label};
    text-align: right;
  }

  @media (max-width: 760px) {
    > header {
      grid-template-columns: 1fr;
    }

    small {
      text-align: left;
    }
  }
`;

const MockWindow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.78fr;
  gap: ${spacing.lg};
  padding: clamp(1rem, 3vw, 2rem);
  background:
    linear-gradient(135deg, rgba(71, 91, 59, 0.14), transparent 48%),
    ${color.paperDeep};

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const SignalStrip = styled.div`
  display: grid;
  gap: 0.6rem;
  align-content: start;
  font-family: ${typography.fontMono};
  font-size: ${typography.scale.caption};

  span {
    display: block;
    padding: 0.75rem 0.9rem;
    background: ${color.chalk};
    border-left: 2px solid ${color.oxblood};
  }
`;

const DenseRows = styled.div`
  display: grid;
  gap: 0.45rem;

  div {
    display: grid;
    grid-template-columns: 6rem minmax(0, 1fr) auto;
    gap: 0.8rem;
    padding: 0.72rem 0.85rem;
    background: ${color.chalk};
    color: ${color.ink};
    font-family: ${typography.fontMono};
    font-size: ${typography.scale.caption};
  }

  strong {
    color: ${color.oxblood};
  }

  @media (max-width: 680px) {
    div {
      grid-template-columns: 1fr;
    }
  }
`;

const ThemeFactoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${spacing.md};
  margin: ${spacing.xl} 0;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ThemeSpecimen = styled.article`
  min-height: 27rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 1px solid var(--anti-line);
  background: var(--anti-paper);
  color: var(--anti-ink);

  header {
    padding: var(--anti-card-rhythm);
    border-bottom: 1px solid var(--anti-line);
    background: var(--anti-surface);
  }

  h3 {
    max-width: 12ch;
    margin: 0 0 0.8rem;
    font-family: var(--anti-font-display);
    font-size: clamp(1.75rem, 3vw, 2.8rem);
    line-height: 0.9;
  }

  p {
    margin: 0;
    color: var(--anti-muted);
    font-family: var(--anti-font-body);
    line-height: ${typography.leading.body};
  }
`;

const ThemeBody = styled.div`
  display: grid;
  gap: var(--anti-detail-rhythm);
  align-content: start;
  padding: var(--anti-card-rhythm);

  span {
    width: 100%;
    min-height: 3.4rem;
    border: 1px solid var(--anti-line);
  }

  span:nth-of-type(1) {
    background: var(--anti-ink);
  }

  span:nth-of-type(2) {
    background: var(--anti-surface);
  }

  span:nth-of-type(3) {
    background: var(--anti-accent);
  }

  small {
    color: var(--anti-muted);
    font-family: var(--anti-font-mono);
    font-size: ${typography.scale.micro};
    letter-spacing: ${typography.tracking.label};
    text-transform: uppercase;
  }
`;

const ThemeFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: var(--anti-card-rhythm);
  border-top: 1px solid var(--anti-line);

  span {
    padding: 0.42rem 0.58rem;
    background: var(--anti-accent);
    color: var(--anti-paper);
    font-family: var(--anti-font-mono);
    font-size: ${typography.scale.micro};
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

function Showcases() {
  const releaseCode = `import { AsymGridShell, LopsidedMetricCard, PanelTilt, SkewedTimeline, TextBlock } from 'hvn-anti-ai-ui';

export function ReleaseRoom() {
  return (
    <AsymGridShell aside={<SkewedTimeline items={releaseEvents} />}>
      <PanelTilt tone="blue">
        <TextBlock title="Review can start">The reviewer path, privacy URL, and paywall proof are in one room.</TextBlock>
      </PanelTilt>
      <LopsidedMetricCard label="Blockers" value="2" detail="Restore purchase screenshot and demo login still missing." emphasis="critical" />
    </AsymGridShell>
  );
}`;

  const intakeCode = `import { PanelTilt, StackOffset, TextBlock, ButtonWarp } from 'hvn-anti-ai-ui';

export function ComplianceIntake() {
  return (
    <StackOffset>
      <PanelTilt>
        <TextBlock title="No vague permission prompts">Every requested capability needs a plain-language reason.</TextBlock>
        <ButtonWarp variant="signal">Send to review</ButtonWarp>
      </PanelTilt>
    </StackOffset>
  );
}`;

  return (
    <Page>
      <h2>Showcases</h2>
      <p>Composed screens that show the library's range: release rooms, compliance intake, and launch narratives without default SaaS layouts.</p>
      <ShowcaseGrid>
        <ShowcaseFrame>
          <header>
            <h3>App release room</h3>
            <small>operator dashboard</small>
          </header>
          <MockWindow>
            <AsymGridShell
              aside={
                <SkewedTimeline
                  items={[
                    { time: '09:12', title: 'Build uploaded', body: 'Version 1.8 is available for internal review.' },
                    { time: '09:34', title: 'Privacy mismatch', body: 'Camera purpose string no longer matches the capture flow.' },
                    { time: '10:05', title: 'Reviewer path added', body: 'Demo login and paywall notes now point to exact screens.' }
                  ]}
                />
              }
              footer={<LopsidedMetricCard label="Ready when" value="2" detail="Screenshots are refreshed and restore purchase proof is attached." emphasis="quiet" />}
            >
              <PanelTilt tone="blue">
                <TextBlock title="Review can start" mood="dense">
                  One view holds the binary state, reviewer notes, privacy links, and sensitive screenshots.
                </TextBlock>
              </PanelTilt>
              <LopsidedMetricCard label="Blockers" value="2" detail="Restore purchase screenshot and demo login still missing." emphasis="critical" />
            </AsymGridShell>
          </MockWindow>
          <Code>{releaseCode}</Code>
        </ShowcaseFrame>

        <ShowcaseFrame>
          <header>
            <h3>Compliance intake</h3>
            <small>review flow</small>
          </header>
          <MockWindow>
            <StackOffset>
              <PanelTilt>
                <TextBlock title="No vague permission prompts">
                  Every requested capability needs a plain-language reason, matching product behavior and App Store metadata.
                </TextBlock>
                <ButtonWarp variant="signal">Send to review</ButtonWarp>
              </PanelTilt>
              <PanelTilt tilt="left" tone="moss">
                <TextBlock title="Sensitive flows stay visible" mood="dense">
                  Account deletion, restore purchases, and data export proof sit beside the review decision.
                </TextBlock>
              </PanelTilt>
            </StackOffset>
            <DenseRows>
              <div><strong>Camera</strong><span>Used only for receipt capture</span><span>specific</span></div>
              <div><strong>Account</strong><span>Delete path shown in Settings</span><span>ready</span></div>
              <div><strong>IAP</strong><span>Restore control needs screenshot</span><span>missing</span></div>
            </DenseRows>
          </MockWindow>
          <Code>{intakeCode}</Code>
        </ShowcaseFrame>

        <ShowcaseFrame>
          <header>
            <h3>Launch narrative</h3>
            <small>marketing page</small>
          </header>
          <AntiHero
            title="Ship the truth, not the pitch"
            actionLabel="Open evidence"
            secondaryLabel="Read release notes"
            align="right"
            proof="The hero carries concrete proof: affected workflow, release state, and why the update matters."
            visual={
              <SignalStrip>
                <span>Build 24 passed device smoke</span>
                <span>Privacy manifest matches permissions</span>
                <span>Support URL checked at 10:40</span>
              </SignalStrip>
            }
          >
            A launch page can feel designed without hiding the operational facts that make the release credible.
          </AntiHero>
          <OffsetFeatureStrip
            features={[
              { title: 'Proof before promise', body: 'The first section names the exact workflow fixed, not a broad claim.', weight: 'wide' },
              { title: 'Copy with receipts', body: 'Release language points to screenshots, review notes, and support paths.' },
              { title: 'Asymmetry with intent', body: 'The evidence panel interrupts the hero because it is the point.', weight: 'tall' }
            ]}
          />
        </ShowcaseFrame>
      </ShowcaseGrid>
    </Page>
  );
}

function ThemeFactory() {
  const operatorTheme = createAntiTheme('operator');
  const code = `import { createAntiTheme, themeToCssVars } from 'hvn-anti-ai-ui';

const theme = createAntiTheme('operator');
const vars = themeToCssVars(theme);`;

  return (
    <Page>
      <h2>Theme Factory</h2>
      <p>
        Named theme packs apply anti-AI palette, typography, and rhythm choices to generated artifacts. The workflow borrows the choose-then-apply
        discipline from Anthropic's Theme Factory skill and turns it into typed React tokens.
      </p>
      <ThemeFactoryGrid>
        {(Object.keys(themeFactoryPresets) as Array<keyof typeof themeFactoryPresets>).map((name) => {
          const theme = themeFactoryPresets[name];
          return (
            <ThemeSpecimen key={name} style={themeToCssVars(theme) as CSSProperties}>
              <header>
                <h3>{theme.name}</h3>
                <p>{theme.description}</p>
              </header>
              <ThemeBody>
                <small>palette</small>
                <span />
                <span />
                <span />
                <small>{theme.rhythm.section}</small>
              </ThemeBody>
              <ThemeFooter>
                {theme.bestFor.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </ThemeFooter>
            </ThemeSpecimen>
          );
        })}
      </ThemeFactoryGrid>
      <DemoFrame>
        <AsymGridShell
          aside={
            <PanelTilt>
              <TextBlock title={operatorTheme.name} mood="dense">
                {operatorTheme.description}
              </TextBlock>
            </PanelTilt>
          }
        >
          <LopsidedMetricCard label="Preset count" value="3" detail="Operator, botanical, and midnight packs ship with typed usage notes." />
          <LopsidedMetricCard label="Output" value="CSS vars" detail="Apply the selected visual system to a page, deck export, or generated HTML surface." emphasis="quiet" />
        </AsymGridShell>
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
    if (route === 'showcases') return <Showcases />;
    if (route === 'themes') return <ThemeFactory />;
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
