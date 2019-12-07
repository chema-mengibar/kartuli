import React, {ReactElement} from 'react'

import { IconClose } from "../../atoms/icon/icon-close";
import ButtonCircle from '../../atoms/button-circle';

import {
   PanelListStyled,
   Content,
   Title,
   List,
   ToolBar
} from "./panel-list.styles";

export type LinkProps = {
  target: string;
  label: string
}

export interface PanelListProps {
  id?: string;
  links: LinkProps[],
  onClose?: Function
}

function navigate( target: string ): void{
  console.log('CLICKED: ', target)
}

const PanelList = ({
  id,
  links = [],
  onClose
}:PanelListProps): ReactElement => {
  return (
    <PanelListStyled id={`panel-list_${id}`}>
      <Content> 
        <Title>Conversation</Title>
        <List>
          {
            links && links.map( (linkItem:LinkProps) => {
              return (
                <li 
                  key={linkItem.target}
                  onClick={ ()=>{ 
                    navigate(linkItem.target); 
                    // onClose && onClose();
                  }}
                >
                  {linkItem.label}
                </li>
              )
            })
          }
        </List>
      </Content>
      <ToolBar>
        <ButtonCircle  
          id="click-close" 
          small
          onClick={()=> {
            onClose && onClose();
          }}
        >
          <IconClose size={12} color="white" title="IconClose"/>
        </ButtonCircle>
      </ToolBar>
    </PanelListStyled>
  )
 };

export default PanelList