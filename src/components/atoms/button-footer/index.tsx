import React, {ReactElement} from 'react'

import {
 	ButtonFooterStyled,
} from "./button-footer.styles";


export interface ButtonFooterProps {
  id?: string;
}


const ButtonFooter = (props:ButtonFooterProps): ReactElement => {
  return (
    <ButtonFooterStyled>

      Id: {props.id}

    </ButtonFooterStyled>
  )
 };

export default ButtonFooter