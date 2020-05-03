import React, {ReactElement} from 'react'

import {
 	SpinnerStyled,
} from "./spinner.styles";


export interface SpinnerProps {}


const Spinner = (props:SpinnerProps): ReactElement => {
  return (
    <SpinnerStyled>
      <div><span></span></div>
      <div><span></span></div>
      <div><span></span></div>
    </SpinnerStyled>
  )
 };

export default Spinner