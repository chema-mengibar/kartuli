import React, {ReactElement} from 'react'

import {Container} from '../../../styles/layout.styles'
import Logo from '../../atoms/logo'
// import NavHeader from '../../molecules/nav-header'

import {
  RegionHeaderSt,
  LogoSt
} from "./region-header.styles";


export interface RegionHeaderProps {}


//@todo:remove <NavHeader />  

const RegionHeader = ({}:RegionHeaderProps): ReactElement => {
  return (
    <RegionHeaderSt role="banner">
      <Container>
        <LogoSt>  
          <Logo negative /> 
        </LogoSt>
      </Container>
    </RegionHeaderSt>
  )
 };

export default RegionHeader