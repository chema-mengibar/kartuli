import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import styled, {css} from "styled-components";

import { geoAbc } from "./alphabet";

export const Letter = styled.div`
  display: flex;
  align-items: center;
  max-width: 390px;
  justify-content: space-between;
  margin: 10px;
  padding: 20px;
  border: 1px solid #b0acac4f;

  i{
    color: gray;
  }
`;

export const Char = styled.span`
  font-size:50px;
`;

storiesOf('Helper | Georgian', module).add(
  'Alphabet',
  (): ReactElement => 
  <>
    <Letter>
      Letter
    </Letter>
  </>  
);

/* 
  <Char> { geoAbc.zeni.letter } </Char>
  <div> <i>Letter:</i>  { geoAbc.zeni.lat } </div>
  <div> <i>Pronunciation:</i> { geoAbc.zeni.pron } </div> 
*/