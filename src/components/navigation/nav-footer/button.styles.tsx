import styled, { css } from "styled-components";

import { PathStyled} from '~/components/visual/icon/icon.styles'


export const ButtonBoxContainer = styled.div`
  display: flex;
  flex-direction:row;
  width:100%;
`

export const ButtonBoxStyled = styled.div(({theme}) => css`
 
  display:flex;
  flex-direction:column;
  flex:1;  
  height: 100%;
  align-items: center;
  justify-content: center; 
  user-select: none;
  cursor:pointer;
  transition: all .2s ease-in-out;
  color: ${ theme.props.color.primary._ };
 
  :last-child {
    background-color: ${ theme.props.color.primary._ };
    color:${ theme.props.color.textContrast._ };

    ${PathStyled}{
      fill: ${ theme.props.color.textContrast._ };
    }
    border-radius: 34.5px 0px 0px 0px;
  }

  &.animated-click{
    transform: scale(.8);
    border-radius: 34.5px;
  }

`);

export const Label = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
` 