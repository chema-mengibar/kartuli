import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import PanelList from ".";
import MockData from "./panel-list.mocks";

const sO = storiesOf('molecules/PanelList', module)

sO.add(
  'default',
  (): ReactElement => <PanelList {...MockData.default}></PanelList>
);
