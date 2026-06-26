# HVN Anti-AI UI

HVN Anti-AI UI is the HVN Stack home for interfaces that should feel intentionally designed rather than assembled from generic AI frontend defaults.

It complements ORCA and HVN Stack: ORCA keeps workflow loops, HVN Stack routes tools, and this repo owns anti-AI UI patterns, examples, and writing guidance.

## What It Includes

- CSS-in-JS React components built with Emotion and TypeScript
- Theme tokens for irregular spacing, hand-tuned typography, custom easing, and non-default color
- Landing-page patterns, dashboard patterns, and modular primitives
- A Vite documentation site with live examples and copy-paste code
- Guides for avoiding generic AI-looking UI and generic AI-sounding microcopy
- ORCA/HVN transition guidance for moving anti-AI UI rules out of workflow repos

## Install

```sh
npm install hvn-anti-ai-ui @emotion/react @emotion/styled
```

## Use

```tsx
import { AntiHero, PanelTilt, TextBlock } from 'hvn-anti-ai-ui';

export function Page() {
  return (
    <AntiHero
      title="Debug the real session"
      visual={
        <PanelTilt tone="blue">
          <TextBlock title="Stack trace first">
            Lead with the user's actual evidence, not a generic productivity claim.
          </TextBlock>
        </PanelTilt>
      }
    >
      Show the operational truth before the pitch.
    </AntiHero>
  );
}
```

## Run Locally

```sh
npm install
npm run dev
```

Build the library and docs:

```sh
npm run build
```

## Design Philosophy

The library avoids common generic frontend patterns:

- Centered hero plus vague productivity copy
- Three equal feature cards
- Purple-blue gradient blobs
- Icon-in-circle repetition
- Uniform rounded cards
- Perfectly symmetric grids
- Copy that could describe any product

The replacement is not randomness. Components use asymmetry, irregular rhythm, real hierarchy, and grounded wording in controlled ways.

## HVN Stack Boundary

- ORCA should keep only routing and review hooks.
- HVN Stack should list this repo as the anti-AI UI capability.
- Detailed anti-AI UI rules, reusable React patterns, and examples belong here.
- Other ORCA specialty surfaces can split into distinct repos when they become reusable products, libraries, or opinionated packs.

## Components

Landing:

- `AntiHero`
- `OffsetFeatureStrip`
- `ZigZagNarrative`

Dashboard:

- `AsymGridShell`
- `LopsidedMetricCard`
- `SkewedTimeline`

Primitives:

- `TextBlock`
- `ButtonWarp`
- `PanelTilt`
- `StackOffset`

## ORCA / HVN Transition

See [docs/orca-hvn-transition.mdx](docs/orca-hvn-transition.mdx).

## Contributing

Contributions should preserve the library's core point of view: design from content and hierarchy, not from a default grid. New patterns need docs that explain what generic output would do instead and why the component chooses a different structure.

Run before opening a pull request:

```sh
npm run lint
npm run build
```

## License

MIT.
