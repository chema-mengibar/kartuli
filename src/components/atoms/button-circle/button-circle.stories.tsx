import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import ButtonCircle from ".";
import MockData from "./button-circle.mocks";

storiesOf('atoms/ButtonCircle', module).add(
  'default',
  (): ReactElement => <ButtonCircle {...MockData.default}></ButtonCircle>
);
