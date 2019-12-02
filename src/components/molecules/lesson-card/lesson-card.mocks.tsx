
import {LessonCardProps} from '.'

type MocksCards = {
  [key : string] : LessonCardProps
}

export default {
  default: {
    id:'letters',
    image:'',
    title:'Letters',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    currentLessons:2,
    totalLessons:33
  },
  bigText: {
    id:'letters',
    image:'',
    title:'Letters',
    description:'Lorem ipsum dolor sit ametm dolor sit amet o sit amet consectetur adipiscing elit.',
    currentLessons:15,
    totalLessons:33
  }
} as MocksCards;
