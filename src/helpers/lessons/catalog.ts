import LessonLetters from '../../components/organisms/lesson-letters'

type TLesson = {
  [key:string]: any
}

export const lessonsCatalog = {
  'letters':{
    component: LessonLetters,
    image:'',
    title:'Letters',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    currentLessons:0,
    totalLessons:33,
    block:'basics',
  }
} as TLesson

