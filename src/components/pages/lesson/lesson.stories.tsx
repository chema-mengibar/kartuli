import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import Lesson from ".";
import MockData from "./lesson.mocks";

storiesOf('pages/Lesson', module).add(
  'default',
  (): ReactElement => <Lesson {...MockData.default}></Lesson>
);
