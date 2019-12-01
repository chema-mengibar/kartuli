import React, {ReactElement} from 'react'

import {
 	ButtonActionStyled,
} from "./button-action.styles";


export interface ButtonActionProps {
  id?: string;
  disabled?: boolean;
  onClick: Function;
  children: React.ReactNode;
}


const ButtonAction = ({
  id,
  disabled= false,
  onClick,
  children
}:ButtonActionProps): ReactElement => {
  return (
    <ButtonActionStyled 
      id={`button-action_${id}`} 
      onClick={ ()=> !disabled && onClick() }
      disabled={disabled}
    >
      {children}
    </ButtonActionStyled>
  )
 };

export default ButtonAction