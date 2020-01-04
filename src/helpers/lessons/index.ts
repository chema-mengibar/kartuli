import {ReactNode} from 'react'
import {LessonCardProps} from '../../components/molecules/lesson-card'

import {lessonsCatalog} from './catalog'

type TArray = object[]

type TDictionary = {
  [key:string]: {
    label:string;
  }
}

export interface LessonProps extends LessonCardProps {
  component: ReactNode;
  block: string;
}

type TLesson = {
  [key:string]: LessonProps
}

const blocks = {
  'basics':{
    label:'Basics',
  },
} as TDictionary

/*
Build a struct mapped from lessosn and groups
Assign id (key) to lesson items
*/ 
export const blocksLessons = Object.keys(blocks).reduce((acc: TArray, blockKey: string) => {
  const blockLessons = Object.entries(lessonsCatalog as TLesson )
    .filter( lessonEntry => lessonEntry[1].block === blockKey )
    .map( lessonEntry => {
      return {...lessonEntry[1], id:lessonEntry[0]} 
    })
  acc.push( {
    label: blocks[blockKey].label,
    lessons: blockLessons
  })
  return acc
}, [])