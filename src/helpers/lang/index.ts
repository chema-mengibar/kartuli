
import Config from '../../config'

type Language = {
  [key: string]: string
}


import En from './languages/en'

//todo: map dictionary object <-> Config.lang
const dictionary = Config.lang == 'en' ? En : {} as Language

export const lang = (key: string) => {
  
  return dictionary[key]
}