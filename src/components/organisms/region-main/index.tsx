import React, {ReactElement} from 'react'

import {Container} from '../../../styles/layout.styles'
import Breadcrumb from '../../molecules/breadcrumb'
import MockData from "../../molecules/breadcrumb/breadcrumb.mocks";
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
    <RegionMainStyled role="main">
      <Container>
        <Breadcrumb links={MockData.default.links}/>
        {children}
      </Container>
    </RegionMainStyled>
  )
 };

export default RegionMain