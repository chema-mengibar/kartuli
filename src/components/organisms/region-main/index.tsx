import React, {ReactElement} from 'react'

import {Container} from '../../../styles/layout.styles'
import {
  RegionMainStyled,
} from "./region-main.styles";

export interface RegionMainProps {
  id?: string;
  children: React.ReactNode
}

const RegionMain = ({
  children
}:RegionMainProps): ReactElement => {
  return (
    <RegionMainStyled  role="main">
      <Container>
        {children}
      </Container>
    </RegionMainStyled>
  )
 };

export default RegionMain