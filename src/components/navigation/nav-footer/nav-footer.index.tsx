import React, {ReactElement, useContext, useState, useLayoutEffect} from 'react'

import { useThemeContext } from '~/context/Theme.context'
import { useNavContext } from '~/context/Nav.context'
import { Icon } from "~/components/visual/icon/icon.index";
import { IconsList } from "~/components/visual/icon/icon.types";


import { ContainerSt } from "./nav-footer.styles"; 
import Button from './button'

const loc = (key: string)=>{
  return 'lorem'
}

const NavFooterContainer = (): ReactElement => {

  const { navState } = useNavContext()
  const themeContext = useThemeContext()

  const visibleItems = Object.entries(navState.items).filter( (item: any): any[] =>{
    return item[1].visible
  })

  return (
    <ContainerSt>
       {
        visibleItems && visibleItems.map( ( entryItem:any ) =>  {
          const item = entryItem[1]
          return (
            <Button 
              key={`button-nav_${item.id}`}
              id={item.id} 
              label={item.label}
              onClick={ ()=> item.onClick() }
            > 
              <Icon iconName={IconsList.box} className="themed" size={18}/>
            </Button>
          )
        })
      }
    </ContainerSt>
  )
 };

export default NavFooterContainer