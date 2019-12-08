
import Config from '../../config'
import En from './languages/en';

type Language = {
  [key: string]: string
}


//todo: map dictionary object <-> Config.lang
const dictionary = Config.lang == 'en' ? En as Language : {} as Language

export const lang = (key: string) => {
  
  return dictionary[key]
}