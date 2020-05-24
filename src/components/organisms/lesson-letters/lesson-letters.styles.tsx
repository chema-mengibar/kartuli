import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

import bl from '../../../styles/baseline'
import { theme } from '../../../styles/theme.styles'
import { pageTitleCss, pageSubTitleCss, tableCellCss, buttonCss, pCss, pHeadlineCss} from '../../../styles/new.text.styles'
import { IconNext } from '../../atoms/icon/icon-next';
import { IconDialog } from '../../atoms/icon/icon-dialog';

export const TitleSt = styled.div` 
  // @todo: move this to central styles pages
  ${pageTitleCss}
  color: ${ theme.colors.text._};
  margin-bottom: ${bl._};
`;

export const TitleExecSt = styled.div` 
  // @todo: move this to central styles pages
  ${pageSubTitleCss}
  color: ${ theme.colors.text._};
  margin-bottom: ${bl._};
`;

export const ExecNameSt = styled.div` 
  // @todo: move this to central styles pages
  ${pageTitleCss}
  color: ${ theme.colors.text._};
  margin-bottom: ${bl._};
  text-transform: capitalize;
  text-align:center;
`;

export const DescriptionSt = styled.div`
  margin-bottom: ${bl._d2};
`;

export const IconNextSt = ()=> { 
  return (
    <IconNext size={12} color={ theme.colors.accent.carmin._ } title="@open-lesson"/>
  )
}


export const TableSt = styled.table`
  width: 100%;
  max-width: 570px; //@todo
  margin-top: ${bl._m2};
  
  tr{
    &:hover td{
      background-color: ${theme.colors.base.l1};
    }
  }

  td, th{
    ${tableCellCss}
    &:first-child {
      padding-left:10px;
      width: 90px;
    }
    &:last-child{
      padding-left:10px;
    } 
  }

  th{
    font-weight: bold;
  }

  td{
    padding-top: ${bl._d4};
    padding-bottom: ${bl._d4};
    border-bottom: 1px solid ${theme.colors.base.l1};
    vertical-align: baseline;

    &:first-child {
      font-size: 28px;
      line-height: 28px;
    }
  }


`;

export const LayoutRow = styled.div`
  display: flex;
  justify-content: center;
  margin: ${bl._} 0 0;
`


export const LinkSt = styled(Link)<{color:string}>` 
  // @todo: move to component button
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration:none;
  border-radius: 14px 14px 16px 17px;
  background-color: ${ ({color}) => theme.colors.accent[color]._};
  padding: ${bl._d2} ${bl._};
  width: 100%;
  
  &:link, &:visited, &:active {
    text-decoration: none;
    color: ${ theme.colors.base.l2};
   
    cursor:pointer;
  }
  &:hover {
    text-decoration: none;
    color: ${ theme.colors.base.l2};
  }

  i{ }

  label{
    min-width: 68px;
    text-align:center;
    ${buttonCss}
    cursor:pointer;
    flex:1;
  }
`;

export const CaligraphWrapperSt = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${bl._};
`

export const PHeadlineSt = styled.div`
  ${pHeadlineCss}
  margin-bottom: ${bl._d2};
`



export const PronuntiationSt = styled.div`
  display: flex;
  margin-bottom: ${bl._d2};
  &.spaced{
    margin-bottom: ${bl._};
  }
`

export const PSt = styled.div`
  ${pCss}
  flex:1;
  font-size: 18px;
  line-height: 18px;
`

export const ListenSt = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 80px;
  padding: ${bl._d2};
  align-items: center;
  justify-content: center;
  border-radius: 14px 14px 16px 17px;
  background-color: ${ theme.colors.accent.carmin._};
  color: ${ theme.colors.base.l2};

  i{ 
    margin-bottom: ${bl._d6}
  }

  label{
    ${buttonCss}
    width: 100%;
    cursor:pointer;
    text-align:center;
  }
`

export const ExampleSt = styled.div`
  display: flex;
`

export const IconExampleSt = styled(IconDialog)`
  margin-right:10px; //@todo: allow className
` 

export const PExampleSt = styled.div`
  ${pCss}
  flex:1;
  font-size: 38px; //@todo: style concept fonts
  line-height: 38px;
`