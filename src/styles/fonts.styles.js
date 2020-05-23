import {css} from 'styled-components'

import {GeoFont} from './fonts.partial.styles'


export const fontCssGlobal = css`

  @font-face {
    font-family: 'Pt-Sans';
    src : url('./static/assets/fonts/PT-Sans/PTSans-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Nunito';
    src : url('./static/assets/fonts/Nunito/Nunito-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Nunito';
    src : url('./static/assets/fonts/Nunito/Nunito-Bold.ttf') format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Nunito';
    src : url('./static/assets/fonts/Nunito/Nunito-SemiBold.ttf') format('truetype');
    font-weight: 600;
  }

  ${GeoFont}

  body{
    font-family: PT-Sans, Arial, Helvetica, sans-serif;;
    font-style: normal;
    font-weight: normal;
    font-size:14px;
  }
`
