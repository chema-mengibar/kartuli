import React, {ReactElement} from 'react'

import {Container} from '../../../styles/layout.styles'
import NavFooter from '../../molecules/nav-footer'

import {
 	RegionFooterStyled,
} from "./region-footer.styles";


export interface RegionFooterProps {

}


const RegionFooter = (props:RegionFooterProps): ReactElement => {

  return (
    <RegionFooterStyled role="navigation">
      <Container>
        <NavFooter />
      </Container>
    </RegionFooterStyled>
  )
 };

export default RegionFooter