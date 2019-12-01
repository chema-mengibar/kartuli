import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { storiesOf } from "@storybook/react";

import ButtonOption, {ButtonOptionStatus} from ".";
import {OptionContainerColumn, OptionContainerRow} from "./button-option.styles";

const oS = storiesOf('atoms/ButtonOption', module)

oS.add(
  'Column',
  (): ReactElement => (

    <OptionContainerColumn>
      <ButtonOption 
        id="click-me-active" 
        onClick={()=> {}}
        status={ ButtonOptionStatus.active}
      >
        option active
      </ButtonOption>


      <ButtonOption 
        id="click-me-selected" 
        onClick={()=> {}}
        status={ ButtonOptionStatus.selected}
      >
        option selected
      </ButtonOption>


      <ButtonOption 
        id="click-me-checked" 
        onClick={()=> {}}
        status={ ButtonOptionStatus.checked}
      >
        option 3
      </ButtonOption>


      <ButtonOption 
        id="click-me-disabled" 
        onClick={()=> {}}
        status={ ButtonOptionStatus.disabled}
      >
        option disabled
      </ButtonOption>

    </OptionContainerColumn>)
);


const LimitedOptionContainerRow = styled(OptionContainerRow)`
  max-width:250px;
`

oS.add(
  'Row',
  (): ReactElement => (

    <LimitedOptionContainerRow>
      <ButtonOption  id="click-a" status={ ButtonOptionStatus.checked} onClick={()=> {}} >  A  </ButtonOption>
      <ButtonOption  id="click-b"  onClick={()=> {}} >  B  </ButtonOption>
      <ButtonOption  id="click-c"  onClick={()=> {}} >  C  </ButtonOption>
    </LimitedOptionContainerRow>)
);
