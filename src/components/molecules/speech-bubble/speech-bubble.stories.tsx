import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import SpeechBubble from ".";
import MockData from "./speech-bubble.mocks";

const sO = storiesOf('molecules/SpeechBubble', module)

sO.add(
  'left',
  (): ReactElement => <SpeechBubble {...MockData.left}></SpeechBubble>
);

sO.add(
  'right',
  (): ReactElement => <SpeechBubble {...MockData.right}></SpeechBubble>
);
