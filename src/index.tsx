import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';


import App from './App';
import * as serviceWorker from './serviceWorker';

import {GlobalStyles} from '~/styles/global/global.styles'
import  { AppContextProvider } from '~/context/App.context'
import { NavContextProvider } from '~/context/Nav.context'
import { ThemeContextProvider } from '~/context/Theme.context'

ReactDOM.render(
  <AppContextProvider>
     <NavContextProvider>
      <ThemeContextProvider>
        <GlobalStyles />
        <App />
      </ThemeContextProvider>
    </NavContextProvider>
  </AppContextProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
