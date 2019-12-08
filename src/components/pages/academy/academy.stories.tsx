import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import Academy from ".";
import MockData from "./academy.mocks";

storiesOf('pages/Academy', module).add(
  'default',
  (): ReactElement => <Academy {...MockData.default}></Academy>
);
