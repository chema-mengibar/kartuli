import React, {ReactElement} from 'react'

import {
  IconStyled,
  PathStyled
} from "./icon.styles";

import {IconProps} from './icon.types'

export const IconBox = ({ 
   color,
   size = 30 
  }:IconProps): ReactElement => {

  const viewBox = '0 0 512 512';

  return (
    <IconStyled size={size}>
      <svg 
        viewBox={viewBox} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="M472,412c-11.046,0-20,8.954-20,20c0,22.056-17.944,40-40,40H100c-22.056,0-40-17.944-40-40V210c0-11.046-8.954-20-20-20
				s-20,8.954-20,20v222c0,44.112,35.888,80,80,80h312c44.112,0,80-35.888,80-80C492,420.954,483.046,412,472,412z"/>
        <PathStyled color={color} d="M452,0H60C26.916,0,0,26.916,0,60v60c0,11.046,8.954,20,20,20h432v191c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20
				V140c11.046,0,20-8.954,20-20V60C512,26.916,485.084,0,452,0z M472,100H40V60c0-11.028,8.972-20,20-20h392
				c11.028,0,20,8.972,20,20V100z"/>
        <PathStyled color={color} d="M300,220c11.046,0,20-8.954,20-20s-8.954-20-20-20h-90c-11.046,0-20,8.954-20,20s8.954,20,20,20H300z"/>
      </svg>
    </IconStyled>
  )
 };