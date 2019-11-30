import React, { ReactElement } from "react";
import styled, {css} from "styled-components";
import { storiesOf } from "@storybook/react";

import { theme } from './theme.styles';
import { hexToRgbA } from '../helpers/colorize'

const colors = theme.colors

const ColorCard = styled.div`
 display: flex;
 padding:10px;
 border-radius: 10px;
 border: 1px solid #aaa;
 margin-bottom:10px;
`

const CardExample = styled.div`
  min-height: 100px;
  width: 100px;
  border-radius: 10px;
  background-color: ${({color}) => color};
`

const CardBaseInfos = styled.div`
  height: 100px;
  padding: 10px;
`

const ThemeName = styled.div`
  font-size:18px;
  margin-bottom:10px;
`

const CardGradation = styled.div`
  padding: 10px;
`

const GradationRow = styled.div`
  width:200px;
`

const ColorName = styled.div`
  text-align:right;
  display:inline-block;
  padding:5px;
  width:50%;
`
const ColorBox = styled.div`
  text-align: center;
  background-color: ${({color}) => color};
  display:inline-block;
  padding:5px 20px;
  width:50%;
`

type StringObj = { [key: string]: string; }

export interface ColorProps {
  name: string;
  themObj: StringObj;
}


const Color = ( {name, themObj }:ColorProps ): ReactElement => {
  return (
    <ColorCard>
      <CardExample color={themObj._}/>
      <CardBaseInfos>
        <ThemeName>{name}</ThemeName>
        {themObj._} <br />
        {hexToRgbA(themObj._, 1)} <br />
      </CardBaseInfos>
      <CardGradation>
        {
          Object
          .entries(themObj)
          .map( obj =>  
            <GradationRow> 
              <ColorName>{obj[0]}</ColorName>
              <ColorBox key={'idx'} color={obj[1]}>{obj[1]}</ColorBox>
            </GradationRow>
          ) 
        }
      </CardGradation>
    </ColorCard>
  )
 };


storiesOf('styles/theme', module).add(
  'Colors',
(): ReactElement => 
  <>
   <Color name={'base'} themObj={colors.base} />
   <Color name={'accent.default'} themObj={colors.accent.default} />
   <Color name={'extra.sucess'} themObj={colors.extra.success} />
  </>
);