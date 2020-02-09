import {css} from 'styled-components'

import {GeoFont} from './fonts.partial.styles'


export const fontCssGlobal = css`

  @font-face {
    font-family: 'Pt-Sans';
    src : url('/static/fonts/PT-Sans/PTSans-Regular.ttf') format('truetype')
  }

  ${GeoFont}

  body{
    font-family: PT Sans, Arial, Helvetica, sans-serif;;
    font-style: normal;
    font-weight: normal;
    font-size:14px;
  }
`
