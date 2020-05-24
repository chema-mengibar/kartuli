import styled, {css} from "styled-components";
import { Link } from 'react-router-dom';

import bl from '../../../styles/baseline'
import {theme} from '../../../styles/theme.styles'
import {cardTitleCss, cardTitleSmallCss, pCss, buttonCss} from '../../../styles/new.text.styles'


export const CardSt = styled.div<{big?:boolean; color:string}>`
  width:100%;
  height: ${ ({big}) => big ? '176px' : '90px' };
  min-height: 70px;
  background-color: #aaa;
  display:flex;
  flex-direction:row;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: ${ ({color}) => theme.colors.accent[color]._};
  border-radius: 14px;
`;

export const CardInfoSt = styled.div`
  flex:1;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${ theme.colors.text.contrast};
  padding: ${bl._};
`;

export const CardDecoSt = styled.div`
  width: 126px;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleSt = styled.div<{big?:boolean}>`
  ${ ({big = false}) =>  big ?  cardTitleCss : cardTitleSmallCss  };
  margin-bottom: ${bl._d2};
`
export const DescriptionSt = styled.div`
  ${pCss}
  margin-bottom: ${bl._d2};
`

export const LinkSt = styled(Link)<{color:string}>` 
  // @todo: move to component button
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration:none;
  border-radius: 14px 14px 16px 17px;
  
  background-color: ${ theme.colors.base.l2};
  padding: ${bl._d4} ${bl._d2};
  width: min-content;
  

  &:link, &:visited, &:active {
    text-decoration: none;
    color: ${ ({color}) => theme.colors.accent[color]._};
    cursor:pointer;
  }
  &:hover {
    text-decoration: none;
    color: ${ ({color}) => theme.colors.accent[color]._};
  }

  i{ }

  label{
    min-width: 68px;
    text-align:center;
    ${buttonCss}
    cursor:pointer;
  }
`;


export const LinkMinimalSt = styled(Link)`  
  // @todo: make component clear
  // @todo: move to component button
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration:none;
  
  padding: ${bl._d4} ${bl._d2};
  width: min-content;
  

  &:link, &:visited, &:active {
    text-decoration: none;
   
    cursor:pointer;
  }
  &:hover {
    text-decoration: none;
  }

  i{ }
`;


export const ProgressBar = styled.div<{
  color:string;
  current:number;
  total:number;
}>`
  height: 9px;
  width: 100%;
  border-radius: 4px;
  background-color: ${ ({color}) => theme.colors.accent[color].l};

  div{
    height: 9px;
    width: ${ ({total, current}) => 100/(total / current)}%;
    background-color: ${ ({color}) => theme.colors.accent[color].d};
    border-radius: 4px;
  }
`;

export const LessonCardContainer = styled.div`
  display: flex;
  flex-direction:column;

  > *:not(:first-child){
    margin: ${bl._d2} 0 0;
  }
`;
