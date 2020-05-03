import React, {ReactElement} from 'react'
import { Link } from 'react-router-dom';

import RegionMain from '../../organisms/region-main'

import {
  TitleSt,
  MenuItemSt,
  ImageWrapper,
} from "./menu.styles";


export interface MenuProps {
  id?: string;
}

const Menu = (props:MenuProps): ReactElement => {
  return (
    <RegionMain spaced>
    
      <TitleSt>Menu</TitleSt>

      <Link to={'academy'}>
        <MenuItemSt>Academy
        <ImageWrapper>
          <img src="./images/pexels-photo-256468.jpg" />
          {/* <img src="../../../../static/images/pexels-photo-256468.jpg" /> */}
        </ImageWrapper>
        </MenuItemSt>
      </Link>
     
    </RegionMain>
  )
 };

export default Menu