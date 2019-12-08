import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import Breadcrumb from ".";
import MockData from "./breadcrumb.mocks";

storiesOf('molecules/Breadcrumb', module).add(
  'default',
  (): ReactElement => <Breadcrumb {...MockData.default}></Breadcrumb>
);
