import styled, { css } from "styled-components";

import { theme } from '../../../styles/theme.styles'
import { hexToRgbA } from '../../../helpers/colorize'
 
import { CaligraphProps } from ".";

export const CaligraphStyled = styled.div`
  position:relative;
  width:110px;
  height:100px;
`;

export const Canvas = styled.div`
  position:absolute;
  width: 100%;
  z-index:0;
`;

export const Bar = styled.div`
  height:30px;
  margin:0;
  z-index:1;
  
  &:first-child{
    border-top: 1px solid ${ hexToRgbA( theme.colors.base.l1, 1)};
  }
  &.base{
    border-top: 1px solid ${ hexToRgbA( theme.colors.base.l1, 1)};
    border-bottom: 1px solid ${ hexToRgbA( theme.colors.accent.carmin._, 1)};
    z-index:2;
  }
  &:last-child{
    border-bottom: 1px solid ${ hexToRgbA( theme.colors.base.l1, 1)};
  }
`;

export const Letter = styled.div`
  position:absolute;
  width: 100%;
  text-align: center;
`;