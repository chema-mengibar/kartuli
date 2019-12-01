import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'
import { text } from '../../../styles/text.styles'

import { ButtonActionProps } from ".";

export const ButtonActionStyled = styled.div<ButtonActionProps>`
  display:flex;
  width: 200px;
  height:  50px;
  align-items: center;
  justify-content: space-around; 
  border-radius:  8px;
  user-select: none;

  ${text.buttonActionLabel}
  color: ${ theme.colors.base.l2};

  ${({disabled}) => 
    disabled ? css`
      background-color: ${ theme.colors.base._ };
      cursor:default;
    `:
    css`
      background-color: ${ theme.colors.accent.default._ };
      cursor:pointer;
      :hover{
        background-color: ${ theme.colors.accent.default.d1 };
      }
    ` 
  }
`;