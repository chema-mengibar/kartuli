import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'
import { text } from '../../../styles/text.styles'

import { ButtonBoxProps } from ".";


export const ButtonBoxContainer = styled.div`
  display: flex;
  flex-direction:row;
  width:100%;

  > *:not(:first-child):not(:last-child){
    margin: 0 10px;
  }

  > *:first-child{
    margin-right: 10px;
  }

  > *:last-child{
    margin-left: 10px;
  }
`

export const ButtonBoxStyled = styled.div<{
  animationClick: boolean
  disabled: boolean
}>`
  
  display:flex;
  flex-direction:column;
  max-width: 200px;
  flex:1;  
  height: 100px;
  align-items: center;
  justify-content: center; 
  border-radius:  8px;
  user-select: none;
  cursor:pointer;
  background-color: ${ theme.colors.base.l2};;
  border: 1px solid ${ theme.colors.base.l1};

  ${text.buttonLabelBig}
  color: ${ theme.colors.base.d2 };

  :hover {
    color:red;
  }

  transition: all .2s ease-in-out;

  ${({animationClick}) => animationClick && css`
    transform: scale(.8);
   ` 
  }
`;

export const Label = styled.div`

  margin-top:10px;
` 
