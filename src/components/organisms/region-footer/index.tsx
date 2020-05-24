import React, {ReactElement} from 'react'

import NavFooter from '../../molecules/nav-footer'

import {
 	RegionFooterStyled,
} from "./region-footer.styles";

const RegionFooter = (): ReactElement => {
  return (
    <RegionFooterStyled role="navigation">
        <NavFooter />
    </RegionFooterStyled>
  )
};

export default RegionFooter