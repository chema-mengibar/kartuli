import React, {ReactElement, useContext, useLayoutEffect} from 'react'
import { Link, useHistory  } from 'react-router-dom';

import {getNavContext} from '../../../helpers/contexts/Nav.context'
import { geoAbc, GeoLetterNames } from '../../../helpers/georgian/alphabet'
import Caligraph from '../../molecules/caligraph';

import {TExercise, exercises, letterExplanation } from './partial'

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

const LessonLetters = ({
  id,
  params
}:LessonLettersProps): ReactElement => {

  const { navState, navDispatch } = useContext( getNavContext() )
  let history = useHistory();

  let exercise : TExercise | null = null

  useLayoutEffect(() => {
    if( params.exerciseId  ){

      exercise = exercises.find( exeItem =>{
        return exeItem.id == params.exerciseId
      } )

      navDispatch({ type: "show", payload: [true, true, true]})
      navDispatch({ 
        type: "setItemClick", 
        payload: {
          item:'left', 
          fct:()=>{
            console.log('left new')
            let prevIndex = exercise.index - 1
            if( prevIndex < 0 ){
              prevIndex = exercises.length - 1
            }
            const prevLetter = exercises[prevIndex]
            history.push(`/lesson/letters/${prevLetter.id}/`);
          }
        }
      })
      navDispatch({ 
        type: "setItemClick", 
        payload: {
          item:'center', 
          label: 'Lesson index',
          fct:()=>{
            history.push(`/lesson/${params.lessonId}/`);
          }
        }
      })
      navDispatch({ 
        type: "setItemClick", 
        payload: {
          item:'right', 
          fct:()=>{
            let nextIndex = exercise.index + 1
            if( nextIndex >= exercises.length ){
              nextIndex = 0
            }
            const nextLetter = exercises[nextIndex]
            history.push(`/lesson/letters/${nextLetter.id}/`);
          }
        }
      })
    
    }else{
      navDispatch({ type: "show", payload: [false, true, false]})
      navDispatch({ 
        type: "setItemClick", 
        payload: {
          item:'center', 
          label:'Academy', 
          fct:()=>{
            history.push(`/academy`);
          }
        }
      })
    }
  }, [params.exerciseId]);
  
  return (
    <LessonLettersStyled>
      <Title>Lesson Letters! 1</Title> 
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc quam.</Description>
      
      {!params.exerciseId && 
        <ul>
          {
            exercises && exercises.map( ( execise: TExercise )=> (
              <li key={`li-exercise-${execise.geoLetterName}`}>
                <Link 
                  id={`exercise-${execise.geoLetterName}`} 
                  to={{pathname:`/lesson/${params.lessonId}/${execise.geoLetterName}`}}
                >
                  {execise.geoLetterName} {execise.geoLetter}
                </Link>
              </li>
            ))
          }
        </ul>
      }

      {
        params.exerciseId && 
        <div>
          <Link id={`exercises-index`} to={{pathname:`/lesson/${params.lessonId}`}}>Back to lesson Index</Link> 
          <br />
          <br />
          <div>
            <Caligraph letter={params.exerciseId as GeoLetterNames} />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc quam, ornare et pretium in, vestibulum vel elit. Duis fermentum nulla ut pretium 
          </div>
          <div>
            {
              geoAbc[params.exerciseId as GeoLetterNames] && 
              geoAbc[params.exerciseId as GeoLetterNames].letter
            }
          </div>
          <div>
            {
              letterExplanation[params.exerciseId as GeoLetterNames] && 
              letterExplanation[params.exerciseId as GeoLetterNames].word
            }
          </div>
        </div>
      }

    </LessonLettersStyled>
  )
 };

export default LessonLetters
