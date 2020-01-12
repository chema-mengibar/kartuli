import { geoAbc, GeoLetterNames } from '../../../helpers/georgian/alphabet'

export interface TExercise {
  id: string
  geoLetterName: GeoLetterNames
  geoLetter: string
  geoLat: string
  geoPron: string
}

type TExplanation ={
  word: string;
}

type TletterExplanation = {
  [key in GeoLetterNames]: TExplanation
}

export const letterExplanation = {
  'ani': {
    word:'მაგალითი',
  },
  'bani': {
    word:'მაგალითი',
  },
  'gani': {
    word:'მაგალითი',
  },
  'doni': {
    word:'მაგალითი',
  },
  'eni': {
    word:'მაგალითი',
  },
  'vini': {
    word:'მაგალითი',
  },
  'zeni': {
    word:'მაგალითი',
  },
  'tani': {
    word:'მაგალითი',
  },
  'ini': {
    word:'მაგალითი',
  },
  'k_ani': {
    word:'მაგალითი',
  },
  'lasi': {
    word:'მაგალითი',
  },
  'mani': {
    word:'მაგალითი',
  },
  'nari': {
    word:'მაგალითი',
  },
  'oni': {
    word:'მაგალითი',
  },
  'p_ari': {
    word:'მაგალითი',
  },
  'zhani': {
    word:'მაგალითი',
  },
  'rae': {
    word:'მაგალითი',
  },
  'sani': {
    word:'მაგალითი',
  },
  't_ari': {
    word:'მაგალითი',
  },
  'uni': {
    word:'მაგალითი',
  },
  'pari': {
    word:'მაგალითი',
  },
  'kari': {
    word:'მაგალითი',
  },
  'ghani': {
    word:'მაგალითი',
  },
  'q_ari': {
    word:'მაგალითი',
  },
  'shini': {
    word:'მაგალითი',
  },
  'chini': {
    word:'მაგალითი',
  },
  'tsani': {
    word:'მაგალითი',
  },
  'dzili': {
    word:'მაგალითი',
  },
  'ts_ili': {
    word:'მაგალითი',
  },
  'ch_ari': {
    word:'მაგალითი',
  },
  'khani': {
    word:'მაგალითი',
  },
  'jani': {
    word:'მაგალითი',
  },
  'hae': {
    word:'მაგალითი',
  },
} as TletterExplanation

export const exercises = Object.entries(geoAbc).map(( letterEntry )=>{
  return  {
    id: letterEntry[0],
    geoLetterName: letterEntry[0],
    geoLetter: letterEntry[1].letter,
    geoLat: letterEntry[1].lat,
    geoPron: letterEntry[1].pron,
  }
}) as TExercise[]


// interface Dictionary {
//   [key: string]: any;
// }

// export const geoAbcDict = geoAbc as Dictionary;