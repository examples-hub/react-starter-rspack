import * as React from 'react';
import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './app';

const root = createRoot(document.getElementById('root')!);

const render = (Component) => {
  root.render(
    <StrictMode>
      <Component />
    </StrictMode>,
  );
};

render(App);
