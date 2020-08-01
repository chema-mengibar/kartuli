
import { lessonsCatalog } from './catalog'
import { Catalog, BlocksConfig, Blocks } from './lesson.types'

class LessonService {

  catalog : Catalog
  blocksConfig : BlocksConfig
  blocks : Blocks

  constructor(){
    this.catalog = lessonsCatalog;

    this.blocksConfig = {
      'basics':{
        labelKey: 'block_academy_basics',
      },
      'lessons':{
        labelKey: 'block_academy_lessons',
      },
    };

    this.blocks = this.lessonsByBlock()
  }

  lessonsByBlock(  ): Blocks{
    return Object
    .keys(this.blocksConfig)
    .reduce((acc: object[], blockKey: string) => {
      const blockLessons = Object.entries(lessonsCatalog as Catalog )
        .filter( lessonEntry => lessonEntry[1].block === blockKey )
        .map( lessonEntry => {
          return {...lessonEntry[1]} 
        })
      acc.push( {
        labelKey: this.blocksConfig[blockKey].labelKey,
        lessons: blockLessons
      })
      return acc
    }, []) as Blocks
  }
}

export default LessonService