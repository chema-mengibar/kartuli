import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'

export const RegionFooterStyled = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  height:65px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  background-color: ${theme.colors.base.l2};
`;