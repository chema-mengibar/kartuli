import React, {ReactElement, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import RegionMain from '../../organisms/region-main'

import {
 	IntroStyled,
} from "./intro.styles";


const Intro = (): ReactElement => {
  
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    setTimeout(() => {  setLoaded(true);  }, 3000);
  }, [])

  return (
    <RegionMain>
      <IntroStyled>
        Intro
        {
          loaded && <Redirect to="/menu" />
        }
      </IntroStyled>
    </RegionMain>
  )
 };

export default Intro