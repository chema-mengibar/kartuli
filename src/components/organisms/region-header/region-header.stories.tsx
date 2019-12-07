import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import RegionHeader from ".";
import MockData from "./region-header.mocks";

storiesOf('organisms/RegionHeader', module).add(
  'default',
  (): ReactElement => <RegionHeader {...MockData.default}></RegionHeader>
);
