import React, {ReactElement} from 'react'
import { Link } from 'react-router-dom';

import RegionMain from '../../organisms/region-main'
import Logo from '../../atoms/logo'
import { LogoSizes } from '../../atoms/logo/logo.types';

import {
  TitleSt,
  MenuItemSt,
  LinksWrapper,
} from "./menu.styles";



export interface MenuProps {
  id?: string;
}

const Menu = (props:MenuProps): ReactElement => {
  return (
    <RegionMain spaced>
      <Logo size={LogoSizes.small}/>
      <TitleSt>Menu</TitleSt>
      <LinksWrapper>
        <Link to={'academy'}>
          <MenuItemSt>Academy
        
          </MenuItemSt>
        </Link>
     
      </LinksWrapper>
      
    </RegionMain>
  )
 };

export default Menu