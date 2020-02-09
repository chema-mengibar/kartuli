import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import Intro from "./";
import MockData from "./intro.mocks";

storiesOf('pages/Intro', module).add(
  'default',
  (): ReactElement => <Intro {...MockData.default}></Intro>
);
