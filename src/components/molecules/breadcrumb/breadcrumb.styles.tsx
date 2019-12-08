import styled, { css } from "styled-components";

import { text } from '../../../styles/text.styles'
import { theme } from '../../../styles/theme.styles'

export const BreadcrumbStyled = styled.ul`
  display: block;
  ${text.breadcrumb}
  list-style-type: none;
  padding-left: 10px;
  color: ${theme.colors.accent.default._};

  li{
    display: inline-block;
    cursor: pointer;
    :after
    {
      content: '>';
      margin: 0 5px;
    }
    :last-child:after
    {
      content: '';
    }
    :hover{
      color: ${theme.colors.accent.default.d2};
    }
  }
`;
