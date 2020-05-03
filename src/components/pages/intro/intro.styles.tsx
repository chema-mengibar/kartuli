import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'

export const IntroStyled = styled.div`
  display: flex;
  flex-direction:column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    344deg,
    ${theme.colors.accent.default.d3} 0%,
    ${theme.colors.accent.default._} 100%);
`;