import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import Caligraph from ".";
import MockData from "./caligraph.mocks";

const sO = storiesOf('molecules/Caligraph', module)

Object.keys(MockData).forEach( mockKey =>{
  sO.add(
    mockKey,
    (): ReactElement => <Caligraph {...MockData[mockKey] }></Caligraph>
  );
} )

