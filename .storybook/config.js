import React from 'react';
import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.(ts|tsx|js|jsx)$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);