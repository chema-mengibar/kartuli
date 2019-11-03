import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {GlobalStyles} from './styles/global.styles'
import  { AppContextProvider } from './helpers/contexts/App.context'

ReactDOM.render(
  <AppContextProvider>
    <GlobalStyles />
    <App />
  </AppContextProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
