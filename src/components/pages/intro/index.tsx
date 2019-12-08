import React, {ReactElement} from 'react'

import { Link } from 'react-router-dom';

import {
 	IntroStyled,
} from "./intro.styles";

export interface IntroProps {

}

const Intro = ({
  
}:IntroProps): ReactElement => {
  return (
    <IntroStyled>
      Intro
      <Link to={'academy'}>Academy</Link>
    </IntroStyled>
  )
 };

export default Intro