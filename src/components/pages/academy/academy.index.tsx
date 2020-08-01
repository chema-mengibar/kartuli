import React, {ReactElement, Fragment, useEffect} from 'react'

// import { useAppContext } from '~/context/App.context';
import CS from '~/services/core/CoreService/CoreService'

// import {useNavContext} from '~/context/Nav.context'
// import {blocksLessons } from '../../../helpers/lessons'
// import { LessonProps } from '../../../helpers/lessons/types'

import { CatalogItem } from '~/services/core/LessonService/lesson.types';
import RegionsWrapper from '~/components/layout/regions-wrapper'
// import { SuportedLocales } from '~/services/core/LocaleService/local.types';
// import LessonCard from '../../molecules/lesson-card';

import {
  Title,
  BlockTitle,
} from "./academy.styles";
import LessonCard from './lesson-card/lesson-card.index';

export interface AcademyProps {
  id?: string;
  location?: any;
}

const Academy = (props:AcademyProps): ReactElement => {

  const t = CS.T([
    'page_academy_headline',
  ]);


  console.log(t)
  const blocksLessons = CS.getInstance().lessons.blocks

  return (
    <RegionsWrapper router={props.location}>
      <Title>{t.page_academy_headline}</Title>
      {
        blocksLessons && blocksLessons.map( (block:any, idxB: number) =>{
          return (
            <Fragment key={'block_' + idxB }>
              <BlockTitle>{CS.t(block.labelKey)}</BlockTitle>
              <div>
              {
                block && block.lessons.map( (catalogLessonItem:CatalogItem, idxL:number) => { //todo: LessonProps
                  return (
                    <LessonCard 
                      key={'lesson_' + idxB + '_' + idxL } 
                      id={catalogLessonItem.id}
                      image={catalogLessonItem.image}
                      title={CS.t(catalogLessonItem.titleKey)}
                      description={CS.t(catalogLessonItem.descriptionKey)}
                      currentLessons={catalogLessonItem.currentLessons}
                      totalLessons={catalogLessonItem.totalLessons}
                      big={( idxL === 0 && idxB=== 0)}
                      to={{pathname:'lesson/'+ catalogLessonItem.id}}
                    />
                  )
                })
              }
              </div>
            </Fragment>
          )
        })
      }
    </RegionsWrapper>
  )
 };

export default Academy


/*


<LessonCard 
                      key={'lesson_' + idxB + '_' + idxL } 
                      {...lessonProps} 
                      big={( idxL === 0 && idxB=== 0)}
                      to={{pathname:'lesson/'+ lessonProps.id}}
                    />

*/