import React, {ReactElement} from 'react'

import RegionsWrapper from '../../organisms/regions-wrapper'
import MockData from "../../molecules/lesson-card/lesson-card.mocks";
import LessonCard from '../../molecules/lesson-card';

import {
  AcademyStyled,
  Title,
  Description,
  BlockTitle,
  CardsContainer
} from "./academy.styles";


export interface AcademyProps {
  id?: string;
}


const Academy = (props:AcademyProps): ReactElement => {
  return (
    <RegionsWrapper>
      <AcademyStyled>

      <Title>Hello!</Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc quam.</Description>
      
      <BlockTitle>BASICS</BlockTitle>
      <CardsContainer>
        <LessonCard {...MockData.default} to={{pathname:'lesson/66', state:{lessonId:54}}}></LessonCard>
        <LessonCard {...MockData.default}></LessonCard>
      </CardsContainer>
      
      <BlockTitle>LEVEL 1</BlockTitle>
      <CardsContainer>
        <LessonCard {...MockData.default}></LessonCard>
        <LessonCard {...MockData.default}></LessonCard>
        <LessonCard {...MockData.default}></LessonCard>
        <LessonCard {...MockData.default}></LessonCard>
      </CardsContainer>
      
      <BlockTitle>CATEGORIES</BlockTitle>
      <CardsContainer>
        <LessonCard {...MockData.default}></LessonCard>
        <LessonCard {...MockData.default}></LessonCard>
        <LessonCard {...MockData.default}></LessonCard>
        <LessonCard {...MockData.default}></LessonCard>
      </CardsContainer>

      </AcademyStyled>
    </RegionsWrapper>
  )
 };

export default Academy