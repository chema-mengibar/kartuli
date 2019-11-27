import React from 'react';
import { addDecorator, configure } from '@storybook/react';

import {GlobalStyles} from '../src/styles/global.styles'

const req = require.context('../src/', true, /\.stories\.(ts|tsx)$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

const Siteframe = (storyFn) => (
  <>
    <GlobalStyles />
    { storyFn() }
  </>
);


addDecorator(Siteframe);

configure(loadStories, module);