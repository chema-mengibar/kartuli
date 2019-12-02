import React, {ReactElement} from 'react'

import {lang} from '../../../helpers/lang'

import {
   LessonCardStyled,
   Image,
   Content,
   Title,
   Description,
   Progress
} from "./lesson-card.styles";


export interface LessonCardProps {
  id?: string;
  image:string;
  title: string;
  description: string;
  currentLessons: number;
  totalLessons: number;
}


const LessonCard = ({
  id,
  image,
  title,
  description,
  currentLessons,
  totalLessons
}:LessonCardProps): ReactElement => {
  return (
    <LessonCardStyled 
      id={id && `lesson-card${id}`}
    >
      <Image>{image}</Image>
      <Content> 
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Progress>
          {`${currentLessons} ${lang('of')} ${totalLessons} ${lang('execices')}`}
        </Progress>
      </Content>
    </LessonCardStyled>
  )
 };

export default LessonCard