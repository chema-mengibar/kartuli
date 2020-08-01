import React, {ReactElement} from 'react'

import {SvgBox} from "./svg/svg-box";

import {IconsList, SvgProps} from './icon.types'


export function getSvg( 
  iconName: IconsList,
  svgOptions: SvgProps 
){

  let Component = null;

  switch(iconName){
    case IconsList.box:
    default:
      Component = SvgBox
  }

  return (
    <Component color={svgOptions.color}/>
  )

}