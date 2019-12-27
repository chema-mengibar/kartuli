import React, {ReactElement} from 'react'

import {Container} from '../../../styles/layout.styles'
import {
  RegionMainStyled,
} from "./region-main.styles";

export interface RegionMainProps {
  id?: string;
  spaced?: boolean;
  children: React.ReactNode
}

const RegionMain = ({
  spaced=false,
  children
}:RegionMainProps): ReactElement => {
  return (
    <RegionMainStyled role="main" withMargins={spaced}>
      <Container>
        {children}
      </Container>
    </RegionMainStyled>
  )
 };

export default RegionMain