import React, {ReactElement, useContext, useLayoutEffect} from 'react'
import { Link, useHistory  } from 'react-router-dom';

import {lessonsCatalog} from '../../../helpers/lessons/catalog'
import {getNavContext} from '../../../helpers/contexts/Nav.context'
import { geoAbc, GeoLetterNames } from '../../../helpers/georgian/alphabet'
import Caligraph from '../../molecules/caligraph';
import { IconGoto } from '../../atoms/icon/icon-goto';
import { IconDialog } from '../../atoms/icon/icon-dialog';
import { theme } from '../../../styles/theme.styles'

import {TExercise, exercises, letterExplanation } from './partial'
import {
  TitleSt,
  TitleExecSt,
  ExecNameSt,
  DescriptionSt,
  LayoutRow,
  TableSt,
  LinkSt,
  IconNextSt,
  CaligraphWrapperSt,
  PHeadlineSt,
  PSt,
  PronuntiationSt,
  ExampleSt,
  ListenSt,
  PExampleSt,
  IconExampleSt
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

  const lesson = lessonsCatalog[params.lessonId]

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

  // @todo:remove this help:  <Link id={`exercises-index`} to={{pathname:`/lesson/${params.lessonId}`}}>Back to lesson Index</Link> 


  const ButtonStartRow = (
    <LayoutRow>
    <LinkSt 
        id="start-lesson-link"
        to={ `/lesson/${params.lessonId}/${exercises[0].geoLetterName}`}
        color={ 'carmin' }
      > 
        <i>
          <IconGoto size={22} color={ theme.colors.base.l2} title="@start-lessons"/>
        </i>
        <label>@Start lesson</label>
      </LinkSt>
  </LayoutRow>
  )
  
  return (
    <>
      {!params.exerciseId && 
        <>
          <TitleSt>{lesson.title}</TitleSt>
          <DescriptionSt>{lesson.description}</DescriptionSt>
          {ButtonStartRow}
          <TableSt>
           <thead>
              <tr>
                <th>@Letter</th>
                <th>@Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                exercises && exercises.map( ( execise: TExercise )=> (
                  <tr key={`li-exercise-${execise.geoLetterName}`}>
                    <td>{execise.geoLetter}</td>
                    <td>{execise.geoLetterName}</td>
                    <td>
                      <Link 
                        id={`exercise-${execise.geoLetterName}`} 
                        to={{pathname:`/lesson/${params.lessonId}/${execise.geoLetterName}`}}
                      >
                        <IconNextSt />
                      </Link>
                    </td>
                  </tr>
                  ))
              }
            </tbody>
          </TableSt>
          {ButtonStartRow}
        </>
      }

      {
        params.exerciseId && 
        <>
          <TitleExecSt>{lesson.title}</TitleExecSt>
          <ExecNameSt>{params.exerciseId}</ExecNameSt>
          <CaligraphWrapperSt>
            <Caligraph letter={params.exerciseId as GeoLetterNames} />
          </CaligraphWrapperSt>

          <PHeadlineSt>@Pronuntiation</PHeadlineSt>
          <PronuntiationSt  className="spaced">
            <PSt>
              {
                geoAbc[params.exerciseId as GeoLetterNames] && 
                geoAbc[params.exerciseId as GeoLetterNames].pron
              }
            </PSt>
            <ListenSt>
              <IconDialog size={26} color={ theme.colors.base.l2} title="@listen-letter"/>
              <label>@Listen</label>
            </ListenSt>
          </PronuntiationSt>
          <PHeadlineSt>@Example</PHeadlineSt>
          <ExampleSt>
            <IconExampleSt size={26} color={ theme.colors.accent.carmin._} title="@example-letter"/>
            <PExampleSt>
              {         
                letterExplanation[params.exerciseId as GeoLetterNames] && 
                letterExplanation[params.exerciseId as GeoLetterNames].word
              }
            </PExampleSt>
          </ExampleSt>
         
        </>
      }

    </>
  )
 };

export default LessonLetters
