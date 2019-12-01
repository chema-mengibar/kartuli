import React, {ReactElement} from 'react'

import {
  IconStyled,
  PathStyled
} from "./icon.styles";

import {IconProps} from './icon.types'

export const IconNext = ({ 
   color,
   title,
   size = 30 
  }:IconProps): ReactElement => {

  const viewBox = '0 0 46.02 46.02';

  return (
    <IconStyled size={size}  title={title}>
      <svg 
        viewBox={viewBox} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645
			C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872
			L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"/>
      </svg>
    </IconStyled>
  )
 };