import React, { ReactElement, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import Logo  from '~/components/ci/logo'

import {
  IntroStyled
} from "./intro.styles";


const Intro = (): ReactElement => {
  
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    setTimeout(() => {  
      setLoaded(true);
    }, 3000);
  }, [])

  
  return (
    <IntroStyled>
      <Logo />
      { loaded && <Redirect to="/academy" />  }
    </IntroStyled>
  )
 };

export default Intro

