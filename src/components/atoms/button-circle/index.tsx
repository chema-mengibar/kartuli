import React, {ReactElement} from 'react'

import {
 	ButtonCircleWrapper,
} from "./button-circle.styles";


export enum ButtonCircleSizes {
  small,
  normal,
}

export interface ButtonCircleProps {
  id?: string;
  onClick: Function;
  small?: boolean;
  children: React.ReactNode;
}


const ButtonCircle = ({
  id,
  onClick,
  small= false,
  children
}:ButtonCircleProps): ReactElement => {
  return (
    <ButtonCircleWrapper 
      id={`button-circle_${id}`} 
      onClick={ ()=> onClick() }
      size={ small ? ButtonCircleSizes.small :  ButtonCircleSizes.normal }
    >
      {children}
    </ButtonCircleWrapper>
  )
 };

export default ButtonCircle