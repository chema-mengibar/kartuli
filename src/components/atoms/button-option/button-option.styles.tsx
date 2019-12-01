import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'
import { text } from '../../../styles/text.styles'

import { ButtonOptionProps, ButtonOptionStatus } from ".";


export const OptionContainerRow = styled.div`
  display: flex;
  flex-direction:row;
  width:100%;
  *:not(:first-child):not(:last-child){
    margin: 0 20px;
  }
`

export const OptionContainerColumn = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  *:not(:first-child){
    margin: 20px 0 0;
  }
`


export const ButtonOptionStyled = styled.div<ButtonOptionProps>`
  position: relative;
  display:flex;
  max-width: 200px;
  flex:1;  
  height: 50px;
  min-height: 50px;
  align-items: center;
  justify-content: space-around; 
  border-radius:  8px;
  user-select: none;

  ${text.buttonOptionLabel}
  color: ${ theme.colors.base.l2};

  ${({status}) => { 

    if( status === ButtonOptionStatus.active ){
      return css`
        background-color: ${ theme.colors.base._ };
        cursor:pointer;
        :hover{
          background-color: ${ theme.colors.extra.success._ };
        }
      `
    }
    
    if( status === ButtonOptionStatus.disabled ){
      return css`
        background-color: ${ theme.colors.base.l1 };
        cursor:default;
      `
    }

    if( status === ButtonOptionStatus.selected ){
      return css`
        background-color: ${ theme.colors.extra.success._ };
        cursor:default;
      `
    }

    // status === checked
    return css`
        background-color: ${ theme.colors.base._ };
      `
  }}

`;

export const IconWrapper = styled.div`
  position: absolute;
  right: -8px;
  background-color: white;
  border-radius: 13px;
`