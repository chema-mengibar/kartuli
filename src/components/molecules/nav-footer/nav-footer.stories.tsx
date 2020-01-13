import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import NavFooter from "./nav-footer";
import MockData from "./nav-footer.mocks";

storiesOf('molecules/NavFooter', module).add(
  'default',
  (): ReactElement => <NavFooter items={MockData.default.items}></NavFooter>
);
