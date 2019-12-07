import React, {ReactElement, useState} from 'react'

import { IconExchange } from "../../atoms/icon/icon-exchange";
import ButtonCircle from '../../atoms/button-circle';

import {
   SpeechBubbleStyled,
   Content,
   ToolBar,
   LangText,
   PronText
} from "./speech-bubble.styles";


export interface DialogProps {
  geo: string;
  pron: string;
  trans: string;
}

export type DirectionProp = 'left' | 'right';

export interface SpeechBubbleProps {
  direction: DirectionProp;
  active: boolean;
  showHelp: boolean;
  dialog: DialogProps;
}

const SpeechBubble = ({
  direction,
  active,
  showHelp,
  dialog,
}:SpeechBubbleProps): ReactElement => {

  const [isShowHelp, setIsShowHelp] = useState( showHelp );

  return (
    <SpeechBubbleStyled direction={direction}>
      <Content> 
       <LangText>{isShowHelp ? dialog.trans : dialog.geo}</LangText>
       <PronText>{dialog.pron}</PronText>
      </Content>
      <ToolBar>
        <ButtonCircle  
          id="click-show-help" 
          small
          onClick={()=> {
            setIsShowHelp( !isShowHelp );
          }}
        >
          <IconExchange size={12} color="white" title="IconExchange"/>
        </ButtonCircle>
      </ToolBar>
    </SpeechBubbleStyled>
  )
 };

export default SpeechBubble