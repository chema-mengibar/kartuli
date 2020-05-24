import styled, { css } from "styled-components";

import {theme} from '../../../styles/theme.styles'
import { text } from '../../../styles/text.styles'

//@todo: check if remove this, just zused in story-book
export const ButtonBoxContainer = styled.div`
  display: flex;
  flex-direction:row;
  width:100%;
`

export const ButtonBoxStyled = styled.div`
  ${text.buttonLabelBig}
  display:flex;
  flex-direction:column;
  flex:1;  
  height: 100%;
  align-items: center;
  justify-content: center; 
  user-select: none;
  cursor:pointer;
  color: ${ theme.colors.text._ };
  background-color: ${ theme.colors.base.l2};
  transition: all .2s ease-in-out;

  :hover {
    color:${ theme.colors.text.contrast };
    background-color: ${ theme.colors.accent.carmin._};
    svg{
      path{
        fill: ${ theme.colors.text.contrast }; //@todo: color component
      }
    }
  }

  &.animated-click{
    transform: scale(.8);
  }
`;

export const Label = styled.div`
  //@todo: move to text styles
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
` 