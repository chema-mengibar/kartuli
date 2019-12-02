import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import {theme} from '../../../styles/theme.styles'
import { IconNext } from "../icon/icon-next";
import { IconPrevious } from "../icon/icon-previous";

import ButtonBox from ".";
import {ButtonBoxContainer} from './button-box.styles'


const ButtonBoxContainerStyled = styled(ButtonBoxContainer)`
  max-width:360px;
  padding:20px;
`

const sO = storiesOf('atoms/ButtonBox', module)

sO.add(
  '2',
  (): ReactElement =>{
    
    const iconColor = theme.colors.base.d2;
    const dummyClick = ()=>{ console.log('clicked')}

    return (
      <>
        <ButtonBoxContainerStyled>
          <ButtonBox id={'prev'} label={'Previous'} onClick={dummyClick}>
            <IconPrevious size={25} color={iconColor} title="IconPrevious"/>
          </ButtonBox>
          <ButtonBox id={'next'} label={'Next'} onClick={dummyClick}>
            <IconNext size={25} color={iconColor} title="IconNext"/>
          </ButtonBox>
        
        </ButtonBoxContainerStyled>

        <ButtonBoxContainerStyled>
          <ButtonBox id={'prev'} label={'Previous'} onClick={dummyClick}>
            <IconPrevious size={25} color={iconColor} title="IconPrevious"/>
          </ButtonBox>
          <ButtonBox id={'expand'} label={'Next'} onClick={dummyClick}>
            <IconNext size={25} color={iconColor} title="IconNext"/>
          </ButtonBox>
          <ButtonBox id={'next'} label={'Next'} onClick={dummyClick}>
            <IconNext size={25} color={iconColor} title="IconNext"/>
          </ButtonBox>
        </ButtonBoxContainerStyled>
      </>
    )
  }
);

