import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import styled, { css } from "styled-components";

import { IconNext } from "../icon/icon-next";

import ButtonBox from ".";
import {ButtonBoxContainer} from './button-box.styles'


const ButtonBoxContainerStyled = styled(ButtonBoxContainer)`
  max-width:360px;
  padding:20px;
`

const sO = storiesOf('atoms/ButtonBox', module)

sO.add(
  '2',
  (): ReactElement => (
    <>
      <ButtonBoxContainerStyled>
        <ButtonBox id={'123456'} label={'Next'} onClick={()=>{}}>
          <IconNext size={25} color="white" title="IconNext"/>
        </ButtonBox>
        <ButtonBox id={'123456'} label={'Next'} onClick={()=>{}}>
          <IconNext size={25} color="white" title="IconNext"/>
        </ButtonBox>
      </ButtonBoxContainerStyled>

      <ButtonBoxContainerStyled>
        <ButtonBox id={'123456'} label={'Next'} onClick={()=>{}}>
          <IconNext size={25} color="white" title="IconNext"/>
        </ButtonBox>
        <ButtonBox id={'123456'} label={'Next'} onClick={()=>{}}>
          <IconNext size={25} color="white" title="IconNext"/>
        </ButtonBox>
        <ButtonBox id={'123456'} label={'Next'} onClick={()=>{}}>
          <IconNext size={25} color="white" title="IconNext"/>
        </ButtonBox>
      </ButtonBoxContainerStyled>
    </>
  )
);

