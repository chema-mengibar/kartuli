import { createGlobalStyle } from 'styled-components'

import resetCss from './reset.styles'
import {fontCssGlobal} from './fonts.styles'

export const GlobalStyles = createGlobalStyle`

  ${resetCss}
  ${fontCssGlobal}

  html, body {
    height: 100%;
  }

  #app{
    display: flex;
    flex-direction: column;
    min-height:100%;
  }
`
