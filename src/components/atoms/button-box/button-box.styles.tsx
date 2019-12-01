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

export const ButtonBoxStyled = styled.div<ButtonBoxProps>`
  
  display:flex;
  flex-direction:column;
  max-width: 200px;
  flex:1;  
  height: 100px;
  align-items: center;
  justify-content: space-around; 
  border-radius:  8px;
  user-select: none;
  cursor:pointer;
  background-color: black;
`;

export const Label = styled.div`
  ${text.buttonLabelSmall}
  color: ${ theme.colors.base.l2};
` 