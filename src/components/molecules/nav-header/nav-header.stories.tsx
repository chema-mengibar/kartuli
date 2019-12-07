import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import NavHeader from ".";
import MockData from "./nav-header.mocks";

storiesOf('molecules/NavHeader', module).add(
  'default',
  (): ReactElement => <NavHeader {...MockData.default}></NavHeader>
);
