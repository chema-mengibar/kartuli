import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'
import { ButtonCircleSizes } from ".";

export const ButtonCircleWrapper = styled.div<{size: ButtonCircleSizes }>`
  
  display:flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${ theme.colors.accent.default._ };
  color: ${ theme.colors.base.l2};
  user-select: none;
  cursor:pointer;
  
  ${({size}) => {
    const sizePx = ( size ===  ButtonCircleSizes.small ) ? 24 : 48;
   
    return css` 
      width: ${sizePx}px;
      height:  ${sizePx}px;
      border-radius:  ${sizePx /2 }px;
    `
  }}

  :hover{
    background-color: ${ theme.colors.accent.default.d1 };
  }
`;