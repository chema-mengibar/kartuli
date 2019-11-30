import React, {ReactElement} from 'react'

import {
  IconStyled,
  PathStyled
} from "./icon.styles";

import {IconProps} from './icon.types'

export const IconEmpty = ({ 
   color,
   size = 30 
  }:IconProps): ReactElement => {

  const viewBox = '';

  return (
    <IconStyled size={size}>
      <svg 
        viewBox={viewBox} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d=""/>
          </svg>
    </IconStyled>
  )
 };