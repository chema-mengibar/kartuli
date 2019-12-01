import React, {ReactElement} from 'react'

import {
  IconStyled,
  PathStyled
} from "./icon.styles";

import {IconProps} from './icon.types'

export const IconClose = ({ 
   color,
   title,
   size = 30 
  }:IconProps): ReactElement => {

  const viewBox = '0 0 208.891 208.891';

  return (
    <IconStyled size={size} title={title}>
      <svg 
        viewBox={viewBox} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="M0,170l65.555-65.555L0,38.891L38.891,0l65.555,65.555L170,0l38.891,38.891l-65.555,65.555L208.891,170L170,208.891
	l-65.555-65.555l-65.555,65.555L0,170z"/>
          </svg>
    </IconStyled>
  )
 };