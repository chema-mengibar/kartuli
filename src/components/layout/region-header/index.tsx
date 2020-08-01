import React, {ReactElement} from 'react'

import {Container} from '~/components/layout/layout.styles'
import Logo from '~/components/ci/logo'

import {
  RegionHeaderSt,
} from "./region-header.styles";


export interface RegionHeaderProps {}


const RegionHeader = ({}:RegionHeaderProps): ReactElement => {
  return (
    <RegionHeaderSt role="banner">
      <Container>
        <Logo /> 
      </Container>
    </RegionHeaderSt>
  )
 };

export default RegionHeader