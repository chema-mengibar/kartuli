import LessonLetters from '../../components/organisms/lesson-letters'

import {LessonsCatalogItem} from './types'

type TLesson = {
  [key:string]: LessonsCatalogItem
}

export const lessonsCatalog = {
  'letters':{
    component: LessonLetters,
    image:'',
    title:'@Letters',
    description:'@Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    currentLessons:2,
    totalLessons:10,
    block:'basics',
    color:'sky'
  },
  'numbers':{
    component: LessonLetters,
    image:'',
    title:'@Number',
    description:'@Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    currentLessons:5,
    totalLessons:10,
    block:'basics',
    color:'kiwi' 
  },
  'supermarkt':{
    component: LessonLetters,
    image:'',
    title:'@Supermarkt',
    description:'@Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    currentLessons:8,
    totalLessons:10,
    block:'lessons',
    color:'lila'
  }
} as TLesson

