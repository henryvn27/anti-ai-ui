import { Global, css } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { color, typography } from '../src/theme';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${color.paper};
    color: ${color.ink};
    font-family: ${typography.fontText};
  }

  a {
    color: inherit;
  }

  code,
  pre {
    font-family: ${typography.fontMono};
  }
`;

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
