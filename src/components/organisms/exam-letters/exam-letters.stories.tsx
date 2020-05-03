import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import ExamLetters from ".";
import MockData from "./exam-letters.mocks";

storiesOf('organisms/ExamLetters', module).add(
  'default',
  (): ReactElement => <ExamLetters {...MockData.default}></ExamLetters>
);
