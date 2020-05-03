import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'
import { text } from '../../../styles/text.styles'
import bl from '../../../styles/baseline'

import { MenuProps } from ".";


export const TitleSt = styled.div`
  ${text.regionMainTitle}
  margin-bottom: ${bl._};
  text-align: center;
`;


export const MenuItemSt = styled.div`
  ${text.menuItemBig}
  width:100%;
  height: 350px;
  background-color: ${theme.colors.accent.default._};
  color: white;
  padding: ${bl._};
  border-radius: 8px;
  position:relative;
  &:hover{
    background-color: ${theme.colors.accent.default.d2};
  }
  
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top:0;
  left:0;
  filter: sepia(1);
  border-radius: 8px;
  opacity: 0.6;
  overflow: hidden;
  transition: all .5s;
  width: 100%;
  height: 100%;
  text-align: right;

  img {
    height:100%;
    width:auto;
    mask-image: linear-gradient( to left, rgba(0,0,0,1), rgba(0,0,0,0));
  }
`;
