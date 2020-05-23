import React, {ReactElement} from 'react'

import {lessonsCatalog} from '../../../helpers/lessons/catalog'
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

  // console.log( 'PROPS', props.location )
  
  const lessonId = props.match.params.lessonId
  const exerciseId = props.match.params.exerciseId

  const LessonComponent = lessonsCatalog[lessonId].component
  
  return (
    <RegionsWrapper router={ {location: props.location, params: props.match.params} }>
      <LessonStyled>
        <LessonComponent params={{lessonId: lessonId, exerciseId:exerciseId }}/>
      </LessonStyled>
    </RegionsWrapper>
  )
 };

export default Lesson