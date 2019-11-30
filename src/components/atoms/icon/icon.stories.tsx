import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import { IconBox } from "./icon-box";
import { IconSave } from "./icon-save";
import { IconCheckFulled } from "./icon-check-fulled";
import { IconCheckLine } from "./icon-check-line";

storiesOf('atoms/Icon', module).add(
  'all',
  (): ReactElement => 
  <>
    <IconBox color="blue"/>
    <IconSave color="blue"/>
    <IconCheckFulled color="blue"/>
    <IconCheckLine color="blue"/>
  </>
);
