import React, {ReactElement} from 'react'

import {lang} from '../../../helpers/lang'

import {
  LinkStyled,
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
  to?: object | string
}


const LessonCard = ({
  id,
  image,
  title,
  description,
  currentLessons,
  totalLessons,
  to
}:LessonCardProps): ReactElement => {
  return (
    <LinkStyled 
      id={id && `lesson-card${id}`}
      to={to}
    >
      <Image>{image}</Image>
      <Content> 
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Progress>
          {`${currentLessons} ${lang('of')} ${totalLessons} ${lang('execices')}`}
        </Progress>
      </Content>
    </LinkStyled>
  )
 };

export default LessonCard