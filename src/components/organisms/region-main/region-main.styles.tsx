import styled, { css } from "styled-components";

import { headerHeight } from '../region-header/region-header.styles'
import { footerHeight } from '../region-footer/region-footer.styles'

export const RegionMainStyled = styled.main<{withMargins:boolean}>`
  
  flex-grow: 1;

  ${({withMargins})=>{

    return withMargins ? 
      css`
        margin-top: ${headerHeight};
        margin-bottom: ${footerHeight};
      ` : 
      css`
        margin: 0;
      `;
  }}


`;
