import React, {ReactElement} from 'react'

import { getSvg } from './icon.helper'
import {
  IconStyled,
} from "./icon.styles";

import {IconProps} from './icon.types'

export const Icon = ({ 
  color,
  size = 30,
  className,
  iconName
}:IconProps): ReactElement => {

  const svgOptions = {
    color
  }
  
  const iconSvg = getSvg(iconName, svgOptions);

  return (
    <IconStyled className={className} size={size}>
      {iconSvg}
    </IconStyled>
  )
};