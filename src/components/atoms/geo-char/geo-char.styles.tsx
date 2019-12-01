import styled, { css } from "styled-components";

import { CharSizes } from ".";

export const GeoCharStyled = styled.div<{size: CharSizes}>`
  ${({size}) => {
    if( size ===  CharSizes.small ){
      return css` font-size: 12px;`
    }
    if( size ===  CharSizes.medium ){
      return css` font-size: 24px;`
    }
    if( size ===  CharSizes.big ){
      return css` font-size: 40px;`
    }
    }
  }}
`;
