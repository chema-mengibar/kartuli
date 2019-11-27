import { createGlobalStyle } from 'styled-components'

import resetCss from './reset.styles'
import {fontCssGlobal} from './fonts.styles'
import {theme} from './theme.styles'

export const GlobalStyles = createGlobalStyle`

  ${resetCss}
  ${fontCssGlobal}

  html, body {
    height: 100%;
    background-color: ${theme.base_des_01};
  }

  #app{
    display: flex;
    flex-direction: column;
    min-height:100%;
  }
`
