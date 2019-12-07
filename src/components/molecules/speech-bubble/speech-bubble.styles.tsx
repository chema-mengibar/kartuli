import styled, { css } from "styled-components";

import { text } from '../../../styles/text.styles'
import { theme } from '../../../styles/theme.styles'
import { hexToRgbA } from '../../../helpers/colorize'

import {DirectionProp} from '.'

export const Content = styled.div`
  flex:1;
  min-height:60px;
  padding:10px;
`;

export const LangText = styled.div`
  ${text.dialogPhrase}
  margin-bottom: 5px;
  color: ${ theme.colors.base._}
`;

export const PronText = styled.div`
  ${text.dialogPron}
  color: ${theme.colors.accent.default._};
`;

export const ToolBar = styled.div`
  display: flex;
  justify-content: center;
  width:40px;
  padding:5px;
`;


export const SpeechBubbleStyled = styled.div<{direction: DirectionProp}>`
  display: flex;
  width:360px;
  border: 1px solid ${ hexToRgbA( theme.colors.accent.default._, 0.2)};
  border-radius: 11px;

  ${({direction}) => {
    return (direction === 'left') ? 
      css`
        ${Content}{
          order:1;
          text-align:left;
        }
        ${ToolBar}{
          order:2;
        }
      ` : 
      css`
        ${Content}{
          order:2;
          text-align:right;
        }
        ${ToolBar}{
          order:1;
        }
      ` 
  }}
`;
