import React, {ReactElement} from 'react'

import RegionHeader from '../../../components/organisms/region-header'
import RegionMain from '../../../components/organisms/region-main'
import RegionFooter from '../../../components/organisms/region-footer'

// import {} from "./regions-wrapper.styles";

export interface RegionsWrapperProps {
  children?: React.ReactNode;
  router: object;
}

const RegionsWrapper = ({
  children,
  router
}:RegionsWrapperProps): ReactElement => {

  return (
    <>
      <RegionHeader />
      <RegionMain>
        {children}
      </RegionMain>
      <RegionFooter />
    </>
  )
 };

export default RegionsWrapper