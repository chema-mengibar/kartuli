import React, {ReactElement} from 'react'

import {lang} from '../../../helpers/lang'
import {theme} from '../../../styles/theme.styles'
import { IconGoto } from '../../atoms/icon/icon-goto';

import {
  CardSt,
  CardInfoSt,
  CardDecoSt,
  TitleSt,
  DescriptionSt,
  LinkSt,
  LinkMinimalSt,
  ProgressBar,
} from "./lesson-card.styles";


export interface LessonCardProps {
  id?: string;
  image:string;
  title: string;
  description: string;
  currentLessons: number;
  totalLessons: number;
  to?: object | string;
  color?: string;
  big?: boolean;
}


const LessonCard = ({
  id,
  image,
  title,
  description,
  color='sky',
  currentLessons,
  totalLessons,
  to,
  big=true,
}:LessonCardProps): ReactElement => {
  

  const cardColor =  theme.colors.accent[color]._;

  return (
    big ?   
      <CardSt big color={color}>
        <CardInfoSt> 
          <TitleSt big>{title}</TitleSt>
          <DescriptionSt>{description}</DescriptionSt>
          <LinkSt 
              id={id && `lesson-card${id}`}
              to={to}
              color={color}
            > 
            <i>
              <IconGoto size={22} color={cardColor} title="IconGoto"/>
            </i>
            <label>@Go</label>
          </LinkSt>
        </CardInfoSt>
        <CardDecoSt>

        </CardDecoSt>
      </CardSt>
    : 
    <CardSt color={color}>
      <CardInfoSt> 
        <TitleSt>{title}</TitleSt>
        <ProgressBar 
          color={color} 
          current={currentLessons} 
          total={totalLessons} >
            <div></div>
        </ProgressBar>
      </CardInfoSt>
      <CardDecoSt>
        <LinkMinimalSt 
          id={id && `lesson-card${id}`}
          to={to}
         > 
          <i>
            <IconGoto size={22} color={'white'} title="IconGoto"/>
          </i>
        </LinkMinimalSt>
      </CardDecoSt>
    </CardSt>
  )
 };

export default LessonCard



/*

 
          <Description>{description}</Description>
          <Progress>
            {`${currentLessons} ${lang('of')} ${totalLessons} ${lang('execices')}`}
          </Progress>




<LessonCard 
  {...MockData.default} 
  to={{
    pathname:'lesson/66', 
    state:{
      type:'lesson', 
      lessonId:54
    }
  }} 
/>

*/