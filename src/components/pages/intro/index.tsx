import React, {ReactElement, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import RegionMain from '../../organisms/region-main'
import Logo  from '../../atoms/logo'
import Spinner  from '../../atoms/spinner'
import { LogoSizes } from '../../atoms/logo/logo.types'

import {
 	IntroStyled,
} from "./intro.styles";


const Intro = (): ReactElement => {
  
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    setTimeout(() => {  setLoaded(true);  }, 3000);
  }, [])

  return (
     
      <IntroStyled>
        <Logo size={LogoSizes.big} negative/>
        <Spinner />
        { loaded && <Redirect to="/academy" />  }
      </IntroStyled>

  )
 };

export default Intro