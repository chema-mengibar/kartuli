import React, {ReactElement} from 'react'

import { theme } from '../../../styles/theme.styles'
import ButtonBox, {ButtonBoxProps} from '../../atoms/button-box'
import { IconGoto } from "../../atoms/icon/icon-goto";
import { IconNext } from "../../atoms/icon/icon-next";
import { IconPrevious } from "../../atoms/icon/icon-previous";

import { ContainerSt } from "./nav-footer.styles"; 

const IconsLib= {
  IconGoto : 'icon-goto',
  IconNext : 'icon-next',
  IconPrevious : 'icon-previous',
}

type IconsStore = (typeof IconsLib)[keyof typeof IconsLib]

type ButtonBoxWithIconT = ButtonBoxProps & {icon: IconsStore}

export type NavFooterT = {
  items: ButtonBoxWithIconT[]
}

const NavFooter = ({
  items=[]
}:NavFooterT): ReactElement => {

const iconColor = theme.colors.text._
const iconSize = 22

  return (
    <ContainerSt>
      {
        items && items.map( (item, idx ) =>  (
          <ButtonBox 
            key={`button-nav_${item.id}`}
            id={item.id} 
            label={item.label}
            onClick={ ()=> item.onClick() }
          > 
            {item.icon === 'icon-next' && <IconNext size={iconSize} color={iconColor} /> } 
            {item.icon === 'icon-previous' && <IconPrevious size={iconSize} color={iconColor} /> } 
            {item.icon === 'icon-goto' && <IconGoto size={iconSize} color={iconColor} /> } 
          </ButtonBox>
        ))
      }
    </ContainerSt>

  )
 };

export default NavFooter