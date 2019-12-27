import React, {ReactElement} from 'react'

import RegionHeader from '../../../components/organisms/region-header'
import RegionMain from '../../../components/organisms/region-main'
import RegionFooter from '../../../components/organisms/region-footer'
import Breadcrumb from '../../../components/molecules/breadcrumb'
import MockData from "../../../components/molecules/breadcrumb/breadcrumb.mocks";

import {
 	RegionsWrapperStyled,
} from "./regions-wrapper.styles";

export interface RegionsWrapperProps {
  children?: React.ReactNode;
}

const RegionsWrapper = ({
  children
}:RegionsWrapperProps): ReactElement => {
  return (
    <RegionsWrapperStyled>
      <RegionHeader />
      <RegionMain spaced>
        <Breadcrumb links={MockData.default.links}/>
        {children}
      </RegionMain>
      <RegionFooter />
    </RegionsWrapperStyled>
  )
 };

export default RegionsWrapper