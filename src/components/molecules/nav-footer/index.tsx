import React, {ReactElement, useContext, useState, useLayoutEffect} from 'react'

import {getNavContext} from '../../../helpers/contexts/Nav.context'

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

  const { navState, navDispatch } = useContext( getNavContext() )

  const [left] = useState( navState.left );
  const [center] = useState( navState.center );
  const [right] = useState( navState.right );

  const [visibles, setVisibles ] = useState( [left.visible, center.visible, right.visible] );

  useLayoutEffect(() => {
    setVisibles( [left.visible, center.visible, right.visible] )
  }, [navState]);

  // navDispatch({ type: "rename", payload: 'Name?'})

  return (
    <NavFooterStyled id="nav-footer" role="navigation">
      <ContainerStyled>
        {
          items && items.map( (item, idx ) =>{
            return visibles[idx] ? (
              <ButtonBox 
                key={`button-nav_${item.id}`}
                id={item.id} 
                label={item.label}
                onClick={ ()=> {item.onClick; right.onClick()}}
              > 
                {item.icon === 'icon-next' && <IconNext color={iconColor} /> } 
                {item.icon === 'icon-previous' && <IconPrevious color={iconColor} /> } 
                {item.icon === 'icon-goto' && <IconGoto color={iconColor} /> } 
              </ButtonBox>): ''
          })
        }
      </ContainerStyled>
    </NavFooterStyled>
  )
 };

export default NavFooter