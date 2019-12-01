import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import ButtonCircle from ".";

import { IconNext } from "../icon/icon-next";
import { IconExchange } from "../icon/icon-exchange";

const oS = storiesOf('atoms/ButtonCircle', module)

oS.add(
  'Normal with Icon',
  (): ReactElement =>( 
    <ButtonCircle 
      id="click-small" 
      onClick={()=> {}}
    >
      <IconNext size={25} color="white" title="IconNext"/>
    </ButtonCircle>
  )
);

oS.add(
  'Normal with text',
  (): ReactElement =>( 
    <ButtonCircle 
      id="click-normal" 
      onClick={()=> {}}
    >
      click
    </ButtonCircle>
  )
);

oS.add(
  'Small with Icon',
  (): ReactElement =>( 
    <ButtonCircle 
      id="click-small" 
      small
      onClick={()=> {}}
    >
      <IconExchange size={12} color="white" title="IconExchange"/>
    </ButtonCircle>
  )
);