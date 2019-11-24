import React, {ReactElement} from 'react'

import {
 	ButtonCircleStyled,
} from "./button-circle.styles";


export interface ButtonCircleProps {
  id?: string;
}


const ButtonCircle = (props:ButtonCircleProps): ReactElement => {
  return (
    <ButtonCircleStyled>

      Id: {props.id}

    </ButtonCircleStyled>
  )
 };

export default ButtonCircle