import React, {ReactElement} from 'react'

import {Container} from '../../../styles/layout.styles'
import NavFooter from '../../molecules/nav-footer'
import MockData from '../../molecules/nav-footer/nav-footer.mocks';

import {
 	RegionFooterStyled,
} from "./region-footer.styles";


export interface RegionFooterProps {

}


const RegionFooter = (props:RegionFooterProps): ReactElement => {

  const mockItems = MockData.default.items

  return (
    <RegionFooterStyled role="navigation">
      <Container>
        Footer
        <NavFooter items={mockItems}/>
      </Container>
    </RegionFooterStyled>
  )
 };

export default RegionFooter