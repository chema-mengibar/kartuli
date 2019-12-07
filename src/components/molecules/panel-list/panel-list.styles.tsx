import styled, { css } from "styled-components";

import { text } from '../../../styles/text.styles'
import { theme } from '../../../styles/theme.styles'
import { hexToRgbA } from '../../../helpers/colorize'

export const PanelListStyled = styled.div`
  display: flex;
  width:360px;
  border: 1px solid ${ hexToRgbA( theme.colors.accent.default._, 0.2)};
  border-radius: 11px;
`;

export const Content = styled.div`
  flex:1;
  min-height:60px;
  padding:10px;
`;

export const Title = styled.div`
  ${text.listTitle}
  margin-bottom: 5px;
  color: ${theme.colors.accent.default.d1};
`;

export const List = styled.div`
  ${text.listItems}
  list-style-type: none;
  padding-left: 10px;
  color: ${theme.colors.accent.default._};

  li{
    cursor: pointer;
  }
`;

export const ToolBar = styled.div`
  display: flex;
  justify-content: center;
  width:40px;
  padding:5px;
`;