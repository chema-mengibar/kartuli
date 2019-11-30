import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import ButtonFooter from ".";
import MockData from "./button-footer.mocks";

storiesOf('atoms/ButtonFooter', module).add(
  'default',
  (): ReactElement => <ButtonFooter {...MockData.default}></ButtonFooter>
);
