import styled, { css } from "styled-components";

import { CharSizes } from ".";

export const GeoCharStyled = styled.div<{size: CharSizes}>`

  font-family: GeoFont;

  ${({size}) => {
    if( size ===  CharSizes.small ){
      return css` font-size: 12px;`
    }
    if( size ===  CharSizes.medium ){
      return css` font-size: 24px;`
    }
    if( size ===  CharSizes.big ){
      return css` 
        font-size: 71px;
        line-height: 78px;
      `
    }
  }}
`;
