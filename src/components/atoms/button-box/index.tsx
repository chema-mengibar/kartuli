import React, {ReactElement} from 'react'

import {
  ButtonBoxStyled,
  Label
} from "./button-box.styles";


export interface ButtonBoxProps {
  id?: string;
  label?: string;
  disabled?: boolean;
  onClick: Function;
  children: React.ReactNode;
}


const ButtonBox = ({
  id,
  label,
  disabled= false,
  onClick,
  children
}:ButtonBoxProps): ReactElement => {
  return (
    <ButtonBoxStyled
      id={id && `button-box_${id}`} 
      onClick={ ()=> onClick() }
      disabled={disabled}
    >
      {children}
      {label && <Label>{label}</Label>}
    </ButtonBoxStyled>
  )
 };

export default ButtonBox