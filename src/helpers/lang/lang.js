
import Config from '../../config'

import En from './languages/en.js'

//todo: map dictionary object <-> Config.lang
const dictionary = Config.lang == 'en' ? En : {} 

export const lang = (key) => {
  
  return dictionary[key]
}