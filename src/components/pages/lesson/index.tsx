import React, {ReactElement} from 'react'

import RegionsWrapper from '../../organisms/regions-wrapper'

import {
 	LessonStyled,
} from "./lesson.styles";


export interface LessonProps {
  id?: string;
  location?: any;
  match?: any;
}


const Lesson = (props:LessonProps): ReactElement => {

  console.log( 'PROPS', props.location.state.lessonId )
  console.log( 'PROPS', props.match.params.lessonId )

  return (
    <RegionsWrapper>
      <LessonStyled>
        Lesson
      </LessonStyled>
    </RegionsWrapper>
  )
 };

export default Lesson