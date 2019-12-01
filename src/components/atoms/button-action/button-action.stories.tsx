import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import ButtonAction from ".";

const oS = storiesOf('atoms/ButtonAction', module)

oS.add(
  'default',
  (): ReactElement =>( 
    <ButtonAction 
      id="click-me" 
      onClick={()=> {}}
    >
     Click me
    </ButtonAction>
  )
);


oS.add(
  'disabled',
  (): ReactElement =>( 
    <ButtonAction 
      id="click-me" 
      disabled
      onClick={()=> {}}
    >
     Click me
    </ButtonAction>
  )
);