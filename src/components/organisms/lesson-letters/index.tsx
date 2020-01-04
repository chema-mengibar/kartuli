import React, {ReactElement} from 'react'
import { Link } from 'react-router-dom';

import Caligraph from '../../molecules/caligraph';

import {
   LessonLettersStyled,
   Title,
   Description
} from "./lesson-letters.styles";


export interface LessonLettersProps {
  id?: string;
  params: {
    lessonId: string,
    exerciseId?: string
  };
}

const exercises = [
  {
    id:'a'
  }
]

const LessonLetters = ({
  id,
  params
}:LessonLettersProps): ReactElement => {

  console.log('params', params)
  return (
    <LessonLettersStyled>
      <Title>Lesson Letters!</Title> 
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc quam.</Description>
      {!params.exerciseId && 
        <ul>
          <li>
            <Link id={`exercise-1`} to={{pathname:`/lesson/${params.lessonId}/1`}}>a</Link>    
          </li>
        </ul>
      }
      {
        params.exerciseId && 
        <div>
          <Link id={`exercise-1`} to={{pathname:`/lesson/${params.lessonId}`}}>Back to lesson Index</Link> 
          <br />
          <br />
          <div>
            <Caligraph letter={'oni'} />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc quam, ornare et pretium in, vestibulum vel elit. Duis fermentum nulla ut pretium 
          </div>
          <div>o</div>
          <div>
          ოთახი
          </div>
        </div>
      }
    </LessonLettersStyled>
  )
 };

export default LessonLetters
