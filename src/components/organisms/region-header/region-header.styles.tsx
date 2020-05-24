import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'


export const RegionHeaderSt = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  height:50px;
`

export const LogoSt = styled.div`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: ${theme.colors.accent.carmin._};
  border-radius: 0px 0px 14px 14px;
  width: 115px;
  padding: 10px;
`