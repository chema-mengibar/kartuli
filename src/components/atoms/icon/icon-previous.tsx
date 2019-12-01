import React, {ReactElement} from 'react'

import {
  IconStyled,
  PathStyled
} from "./icon.styles";

import {IconProps} from './icon.types'

export const IconPrevious = ({ 
   color,
   title,
   size = 30 
  }:IconProps): ReactElement => {

  const viewBox = '0 0 46.02 46.02';

  return (
    <IconStyled size={size}>
      <svg 
        viewBox={viewBox} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g  transform="rotate(-180,23.010087,23.009914)">
          <PathStyled color={color} d="m 14.757,46.02 c -1.412,0 -2.825,-0.521 -3.929,-1.569 -2.282,-2.17 -2.373,-5.78 -0.204,-8.063 L 23.382,22.97 10.637,9.645 C 8.46,7.37 8.54,3.76 10.816,1.582 c 2.277,-2.178 5.886,-2.097 8.063,0.179 l 16.505,17.253 c 2.104,2.2 2.108,5.665 0.013,7.872 L 18.893,44.247 c -1.123,1.177 -2.626,1.773 -4.136,1.773 z"/>
        </g>
      </svg>
    </IconStyled>
  )
 };