// import LessonLetters from '~/components/lessons/lesson-letters'
// import TrainerLetters from '~/components/trainers/trainer-letters';

import {Catalog} from './lesson.types'


export const lessonsCatalog = {
  'letters':{
    id: 'letters',
    component: null,
    trainer: null,
    image:'',
    titleKey: 'lesson_letters_headline',
    descriptionKey: 'lesson_letters_description',
    currentLessons:2,
    totalLessons:10,
    block:'basics',
    color:'sky',
    videoSource:'https://media.flaticon.com/dist/min/img/video/karma/video.mp4',
  },
 
} as Catalog

