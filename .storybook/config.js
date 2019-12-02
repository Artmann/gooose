import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import '../src/main.css';

import light from '../src/themes/light';

addDecorator(storyFn =>
  <ThemeProvider theme={ light }>
    <div style={{ margin: '2rem', width: '411px' }}>
      { storyFn() }
    </div>
  </ThemeProvider>
);

configure(require.context('../src/components', true, /\.story\.(js|ts|tsx)$/), module);
