import styled, { css } from "styled-components";

import { theme } from '../../../styles/theme.styles'
import { hexToRgbA } from '../../../helpers/colorize'
 
import { CaligraphProps } from ".";

export const CaligraphStyled = styled.div`
  position:relative;
  width:360px;
  height:100px;
`;

export const Canvas = styled.div`
  position:absolute;
  width: 100%;
`;

export const Bar = styled.div`
  height:30px;
  background-color: ${ hexToRgbA( theme.colors.accent.default._, 0.2)};
  margin:2px 0;
`;

export const Letter = styled.div`
  position:absolute;
  width: 100%;
  text-align: center;
`;