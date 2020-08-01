import React, {ReactElement} from 'react'

import NavFooter from '~/components/navigation/nav-footer/nav-footer.index'

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