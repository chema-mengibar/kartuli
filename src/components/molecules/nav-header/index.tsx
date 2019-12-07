import React, {ReactElement} from 'react'


import {
 	NavHeaderStyled,
} from "./nav-header.styles";


export interface NavHeaderProps {

}


const NavHeader = (props:NavHeaderProps): ReactElement => {
  return (
    <NavHeaderStyled role="navigation">
      --Nav
    </NavHeaderStyled>
  )
 };

export default NavHeader