import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import LessonCard from ".";
import {LessonCardContainer} from './lesson-card.styles'
import MockData from "./lesson-card.mocks";

const sO = storiesOf('molecules/LessonCard', module)

sO.add(
  'default',
  (): ReactElement => 
    <LessonCardContainer>
      <LessonCard {...MockData.default}></LessonCard>
      <LessonCard {...MockData.bigText}></LessonCard>
      <LessonCard {...MockData.bigText}></LessonCard>
    </LessonCardContainer>
);
