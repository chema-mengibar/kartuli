import React, {ReactElement, Fragment} from 'react'

import {blocksLessons } from '../../../helpers/lessons'
import { LessonProps } from '../../../helpers/lessons/types'

import RegionsWrapper from '../../organisms/regions-wrapper'
import LessonCard from '../../molecules/lesson-card';

import {
  Title,
  BlockTitle,
  LessonCardContainerSt
} from "./academy.styles";

export interface AcademyProps {
  id?: string;
  location?: any;
}

const Academy = (props:AcademyProps): ReactElement => {

  return (
    <RegionsWrapper router={props.location}>
      <Title>@Academy</Title>
      {
        blocksLessons && blocksLessons.map( (block:any, idxB: number) =>{
          return (
            <Fragment key={'block_' + idxB }>
              <BlockTitle>{block.label}</BlockTitle>
              <LessonCardContainerSt>
                {
                  block && block.lessons.map( (lessonProps:LessonProps, idxL:number) => {
                    return (
                      <LessonCard 
                        key={'lesson_' + idxB + '_' + idxL } 
                        {...lessonProps} 
                        big={( idxL === 0 && idxB=== 0)}
                        to={{pathname:'lesson/'+ lessonProps.id}}
                      />
                    )
                  })
                }
              </LessonCardContainerSt>
            </Fragment>
          )
        })
      }

    </RegionsWrapper>
  )
 };

export default Academy
