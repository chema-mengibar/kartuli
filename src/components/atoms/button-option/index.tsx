import React, {ReactElement} from 'react'

import {theme} from '../../../styles/theme.styles'
import { IconCheckFulled } from "../icon/icon-check-fulled";

import {
   ButtonOptionStyled,
   IconWrapper,
} from "./button-option.styles";


export enum ButtonOptionStatus {
  active,
  selected,
  checked,
  disabled
}

export interface ButtonOptionProps {
  id?: string;
  onClick: Function;
  status?: ButtonOptionStatus;
  children: React.ReactNode;
  className?: string;
}


const ButtonOption = ({
  id,
  onClick,
  status = ButtonOptionStatus.active,
  children,
  className
}:ButtonOptionProps): ReactElement => {
  return (
    <ButtonOptionStyled
      id={`button-option_${id}`} 
      onClick={ ()=> onClick() }
      status={ status }
      className={className}
    >
      {children}
      { 
        (status === ButtonOptionStatus.checked) && 
          <IconWrapper>
            <IconCheckFulled 
              size={25} 
              color={ theme.colors.extra.success._ } 
              title="checked" />
          </IconWrapper>
      }
    </ButtonOptionStyled>
  )
 };

export default ButtonOption