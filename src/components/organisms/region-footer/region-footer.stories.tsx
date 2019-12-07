import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import RegionFooter from ".";
import MockData from "./region-footer.mocks";

storiesOf('organisms/RegionFooter', module).add(
  'default',
  (): ReactElement => <RegionFooter {...MockData.default}></RegionFooter>
);
