import {SpeechBubbleProps} from './'

type Mocks = {
  [key:string]: SpeechBubbleProps
}

export default {
  left:{
    direction: 'left',
    active: false,
    showHelp: false,
    dialog:{
      geo:'რა ღირს ვაშლი?',
      pron:'ra ghirs vashli?',
      trans:'Cuanto cuestan las manzanas?',
    }
  },
  right:{
    direction: 'right',
    active: false,
    showHelp: false,
    dialog:{
      geo:'ვაშლის ფასი 2 ლარი ღირს',
      pron:'vashlis pasi 2 lari ghirs',
      trans:'Las manzanas cuestan 2 laris',
    }
  }
} as Mocks;
