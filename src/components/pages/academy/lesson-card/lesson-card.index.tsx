import React, {ReactElement} from 'react'

import { Icon } from "~/components/visual/icon/icon.index";
import { IconsList } from "~/components/visual/icon/icon.types";

import {
  CardSt,
  CardInfoSt,
  CardDecoSt,
  TitleSt,
  DescriptionSt,
  LinkSt,
  LinkMinimalSt,
  ProgressBar,
  Video,
} from "./lesson-card.styles";

import {LessonCardProps} from './lesson-card.types'

const LessonCard = ({
  id,
  image,
  title,
  description,
  color='sky',
  videoSource,
  currentLessons,
  totalLessons,
  to,
  big=true,
}:LessonCardProps): ReactElement => {
  

  const cardColor =  color // theme.colors.accent[color]._;

  return (
    big ?   
      <CardSt big color={color}>
        <CardInfoSt> 
          <TitleSt big>{title}</TitleSt>
          <DescriptionSt>{description.slice(0,30)}</DescriptionSt>
          <LinkSt 
              id={id && `lesson-card${id}`}
              to={to}
              color={color}
            > 
            <i>
              <Icon iconName={IconsList.box} className="themed" size={18}/>
            </i>
            <label>@Go</label>
          </LinkSt>
        </CardInfoSt>
        <CardDecoSt>
          <Video autoPlay loop>
            <source 
              src={videoSource} 
              type="video/mp4" />
          </Video>
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
            <Icon iconName={IconsList.box} className="themed" size={18}/>
          </i>
        </LinkMinimalSt>
      </CardDecoSt>
    </CardSt>
  )
 };

export default LessonCard


/*
todo:
- icon
- language
- theme
- animation video
*/

/* 
  <IconGoto size={22} color={cardColor} title="IconGoto"/>

*/


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