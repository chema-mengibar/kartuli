import React, {ReactElement, useContext, useState, useLayoutEffect} from 'react'

import {getNavContext} from '../../../helpers/contexts/Nav.context'

import { ButtonBoxProps } from '../../atoms/button-box';
import NavFooter from './nav-footer';


const IconsLib= {
  IconGoto : 'icon-goto',
  IconNext : 'icon-next',
  IconPrevious : 'icon-previous',
}

type IconsStore = (typeof IconsLib)[keyof typeof IconsLib]

type ButtonBoxWithIconT = ButtonBoxProps & {icon: IconsStore}


const items =[
  { 
    id:'nav-footer-left',
    label:'Back',
    disabled: false,
    icon: 'icon-previous',
    onClick: ()=>{ console.log('goto to previous')},
  },
  { 
    id:'nav-footer-center',
    label:'Academy',
    disabled: false,
    icon: 'icon-goto',
    onClick: ()=>{ console.log('goto to somewhere')},
  },
  { 
    id:'nav-footer-right',
    label:'Next',
    disabled: false,
    icon: 'icon-next',
    onClick: ()=>{ console.log('goto to next')},
  },
] as ButtonBoxWithIconT[]


const NavFooterContainer = (): ReactElement => {

  const { navState } = useContext( getNavContext() )

  const [visibles, setVisibles ] = useState( [navState.left.visible, navState.center.visible, navState.right.visible] );

  useLayoutEffect(() => {
    setVisibles( [navState.left.visible, navState.center.visible, navState.right.visible] )
    items[0].onClick = navState.left.onClick 
    items[1].onClick = navState.center.onClick 
    items[2].onClick = navState.right.onClick 
  }, [navState]);


  const filteredItems = items.filter( (item: ButtonBoxWithIconT, idx: number): ButtonBoxWithIconT[] =>{
    return visibles[idx]
  })

  return (
    <NavFooter items={filteredItems}></NavFooter>
  )
 };

export default NavFooterContainer