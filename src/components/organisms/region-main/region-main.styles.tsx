import styled, { css } from "styled-components";

import { headerHeight } from '../region-header/region-header.styles'
import { footerHeight } from '../region-footer/region-footer.styles'

export const RegionMainStyled = styled.main`
  margin-top: ${headerHeight};
  margin-bottom: ${footerHeight};
`;
