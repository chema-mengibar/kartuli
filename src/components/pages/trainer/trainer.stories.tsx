import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import Trainer from ".";
import MockData from "./trainer.mocks";

storiesOf('pages/Trainer', module).add(
  'default',
  (): ReactElement => <Trainer {...MockData.default}></Trainer>
);
