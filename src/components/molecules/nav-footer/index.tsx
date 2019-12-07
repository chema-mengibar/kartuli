import React, {ReactElement} from 'react'

import ButtonBox, {ButtonBoxProps} from '../../atoms/button-box'
import { IconGoto } from "../../atoms/icon/icon-goto";
import { IconNext } from "../../atoms/icon/icon-next";
import { IconPrevious } from "../../atoms/icon/icon-previous";
import { theme } from '../../../styles/theme.styles'

import {
   NavFooterStyled,
   ContainerStyled
} from "./nav-footer.styles";


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

  return (
    <NavFooterStyled id="nav-footer" role="navigation">
      <ContainerStyled>
        {
          items && items.map( item =>{
            return (
              <ButtonBox 
                id={item.id} 
                label={item.label}
                onClick={item.onClick}
              > 
                {item.icon === 'icon-next' && <IconNext color={iconColor} /> } 
                {item.icon === 'icon-previous' && <IconPrevious color={iconColor} /> } 
                {item.icon === 'icon-goto' && <IconGoto color={iconColor} /> } 
              </ButtonBox>)
          })
        }
      </ContainerStyled>
    </NavFooterStyled>
  )
 };

export default NavFooter