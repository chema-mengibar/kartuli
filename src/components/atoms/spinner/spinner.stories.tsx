import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import Spinner from ".";
import MockData from "./spinner.mocks";

storiesOf('atoms/Spinner', module).add(
  'default',
  (): ReactElement => <Spinner {...MockData.default}></Spinner>
);
