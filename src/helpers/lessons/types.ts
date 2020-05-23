import {ReactNode, ReactComponentElement} from 'react'

import {LessonCardProps} from '../../components/molecules/lesson-card'


export type TArray = object[]

export type TDictionary = {
  [key:string]: {
    label:string;
  }
}

export interface LessonProps extends LessonCardProps {
  component: any; //@issue
  block: string;
}

export type TLesson = {
  [key:string]: LessonProps
}

export interface LessonsCatalogItem {
  component: any; //@issue ?? ReactNode
  image: string;
  title: string;
  description: string;
  currentLessons: number;
  totalLessons: number;
  block: string;
  color: string; // src\styles\theme.styles.ts
}