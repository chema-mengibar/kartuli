import {ReactNode} from 'react'

import {lessonsCatalog} from './catalog'

import { TArray, TDictionary, TLesson } from './types'


const blocks = {
  'basics':{
    label:'@Basics',
  },
  'lessons':{
    label:'@Lessons',
  },
} as TDictionary


/*
Build a struct mapped from lessosn and groups
Assign id (key) to lesson items
*/ 
export const blocksLessons = Object
.keys(blocks)
.reduce((acc: TArray, blockKey: string) => {

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