import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import LessonLetters from ".";
import MockData from "./lesson-letters.mocks";

storiesOf('organisms/LessonLetters', module).add(
  'default',
  (): ReactElement => <LessonLetters {...MockData.default}></LessonLetters>
);
