import React, {ReactElement} from 'react'

import {
 	BreadcrumbStyled,
} from "./breadcrumb.styles";


export type LinkProps = {
  target: string;
  label: string;
}

export interface BreadcrumbProps {
  links: LinkProps[],
}


function navigate( target: string ): void{
  console.log('CLICKED: ', target)
}

const Breadcrumb = ({
  links
}:BreadcrumbProps): ReactElement => {
  return (
    <BreadcrumbStyled>
    {
      links && links.map( (linkItem:LinkProps) => {
        return (
          <li 
            key={linkItem.target}
            onClick={ ()=>{ 
              navigate(linkItem.target); 
            }}
          >
            {linkItem.label}
          </li>
        )
      })
    }
    </BreadcrumbStyled>
  )
 };

export default Breadcrumb