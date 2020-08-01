import React, {ReactElement} from 'react'

import RegionHeader from '~/components/layout/region-header'
import RegionMain from '~/components/layout/region-main'
import RegionFooter from '~/components/layout/region-footer'

export interface RegionsWrapperProps {
  children?: React.ReactNode;
  router: object;
}

const RegionsWrapper = ({
  children,
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