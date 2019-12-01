import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import styled, {css} from "styled-components";

import { GeoLetterNames, geoAbc } from '../../../helpers/georgian/alphabet'

import GeoChar, { CharSizes } from ".";

export const Container = styled.div`
  padding: 30px;
  display:grid;
  grid-template-columns: 70px 40px ;
  grid-template-rows: 40px;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  color: #444;
`;

const sO = storiesOf('atoms/GeoChar', module)

sO.add(
  'Sizes',
  (): ReactElement => 
  <Container>
    <div>small</div>
    <GeoChar letter={'ani'} size={ CharSizes.small } />
    
    <div>medium</div>
    <GeoChar letter={'ani'} size={ CharSizes.medium } />
    
    <div>big</div>
    <GeoChar letter={'ani'} size={ CharSizes.big } />
  </Container>

);



const letterNames =  Object.keys(geoAbc)

export const ContainerLetters = styled.div`
  padding: 30px;
  display:flex;
  color: #444;
  flex-wrap: wrap;
`;

export const BlockLetter = styled.div`
  min-width:100px;
  margin-left: 20px;
  margin-bottom: 40px;
`;

sO.add(
  'Letters',
  (): ReactElement => 
  <ContainerLetters>
    {
      letterNames && letterNames.map( letterKey =>(
        <BlockLetter>
          <div>{letterKey}</div>
          <GeoChar letter={ letterKey as GeoLetterNames } size={ CharSizes.big } />
        </BlockLetter>
      ) )
    }
  </ContainerLetters>
);