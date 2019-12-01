import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import styled, {css} from "styled-components";

import { IconBox } from "./icon-box";
import { IconSave } from "./icon-save";
import { IconCheckFulled } from "./icon-check-fulled";
import { IconCheckLine } from "./icon-check-line";
import { IconClose } from "./icon-close";
import { IconDialog } from "./icon-dialog";
import { IconExchange } from "./icon-exchange";
import { IconGoto } from "./icon-goto";
import { IconMenuOpen } from "./icon-menu-open";
import { IconNext } from "./icon-next";
import { IconPrevious } from "./icon-previous";
import { IconPencil } from "./icon-pencil";


export const Advice = styled.div`
  padding:10px;
  border-radius: 5px;
  background-color: #f5cc5d;
  margin:20px;
`;

export const Container = styled.div`
  padding: 30px;
  display:grid;
  grid-template-columns: 40px 40px 40px 40px;
  grid-template-rows: 40px;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;

storiesOf('atoms/Icon', module).add(
  'Svg',
  (): ReactElement => 
  <>
    <Advice>
      Place the mouse over the icon to display the Component Name
    </Advice>
    <Container>
      <IconBox color="blue" title="IconBox"/>
      <IconSave color="blue" title="IconSave"/>
      <IconCheckFulled color="blue" title="IconCheckFulled"/>
      <IconCheckLine color="blue" title="IconCheckLine"/>
      <IconClose color="blue" title="IconClose"/>
      <IconDialog color="blue" title="IconDialog"/>
      <IconExchange color="blue" title="IconExchange"/>
      <IconGoto color="blue" title="IconGoto"/>
      <IconMenuOpen color="blue" title="IconMenuOpen"/>
      <IconNext color="blue" title="IconNext"/>
      <IconPrevious color="blue" title="IconPrevious"/>
      <IconPencil color="blue" title="IconPencil"/>
    </Container>
  </>  
);