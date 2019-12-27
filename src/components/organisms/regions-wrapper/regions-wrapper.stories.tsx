import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import RegionsWrapper from ".";
import MockData from "./regions-wrapper.mocks";

storiesOf('organisms/RegionsWrapper', module).add(
  'default',
  (): ReactElement => <RegionsWrapper {...MockData.default}></RegionsWrapper>
);
