import React, {ReactElement} from 'react'

import {Container} from '../../../styles/layout.styles'
import NavHeader from '../../molecules/nav-header'

import {
 	RegionHeaderStyled,
} from "./region-header.styles";


export interface RegionHeaderProps {}


const RegionHeader = ({}:RegionHeaderProps): ReactElement => {
  return (
    <RegionHeaderStyled role="banner">
      <Container>
        Header
        <NavHeader /> 
      </Container>
    </RegionHeaderStyled>
  )
 };

export default RegionHeader