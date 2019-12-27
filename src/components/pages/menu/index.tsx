import React, {ReactElement} from 'react'
import { Link } from 'react-router-dom';

import RegionMain from '../../organisms/region-main'

import {
 	MenuStyled,
} from "./menu.styles";


export interface MenuProps {
  id?: string;
}

const Menu = (props:MenuProps): ReactElement => {
  return (
    <RegionMain>
      <MenuStyled>
        <Link to={'academy'}>Academy</Link>
      </MenuStyled>
    </RegionMain>
  )
 };

export default Menu