import React, {ReactElement, Fragment} from 'react'

import {blocksLessons, LessonProps} from '../../../helpers/lessons'

import RegionsWrapper from '../../organisms/regions-wrapper'
import LessonCard from '../../molecules/lesson-card';

import {
  AcademyStyled,
  Title,
  Description,
  BlockTitle,
  CardsContainer
} from "./academy.styles";


export interface AcademyProps {
  id?: string;
  location?: any;
}


const Academy = (props:AcademyProps): ReactElement => {

  return (
    <RegionsWrapper router={props.location}>>
      <AcademyStyled>
        <Title>Hello!</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc quam.</Description>
        {
          blocksLessons && blocksLessons.map( (block:any, idxB: number) =>{
            return (
              <Fragment key={'block_' + idxB }>
                <BlockTitle>{block.label}</BlockTitle>
                <CardsContainer>
                  {
                    block && block.lessons.map( (lessonProps:LessonProps, idxL:number) => {
                      return (
                        <LessonCard 
                          key={'lesson_' + idxB + '_' + idxL } 
                          {...lessonProps} 
                          to={{pathname:'lesson/'+ lessonProps.id}}
                        />
                      )
                    })
                  }
                </CardsContainer>
              </Fragment>
            )
          })
        }
      </AcademyStyled>
    </RegionsWrapper>
  )
 };

export default Academy

/*

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