type GeoLetter ={
  letter: string;
  pron:string;
  lat: string;
}

export type GeoLetterNames = 'ani' | 'bani' | 'gani' | 'doni'  | 'eni'  | 'vini'  | 'zeni'  | 'tani'  | 'ini'  | 'k_ani'  | 'lasi'  | 'mani'  | 'nari'  | 'oni'  | 'p_ari'| 'zhani'  | 'rae'  | 'sani'  | 't_ari'  | 'uni'  | 'pari'  | 'kari'  | 'ghani'  | 'q_ari'  | 'shini'  | 'chini'  | 'tsani'  | 'dzili'  | 'ts_ili'  | 'ch_ari'  | 'khani'  | 'jani'  | 'hae' ;

type GeoAlphabet = {
  [key in GeoLetterNames]: GeoLetter
}

export const geoAbc = {
  'ani': {
    letter:'ა',    
    pron:'a',    
    lat:'a',    
  },
  'bani': {
    letter:'ბ',    
    pron:'b',    
    lat:'b',    
  },
  'gani': {
    letter:'გ',    
    pron:'g',    
    lat:'g',    
  },
  'doni': {
    letter:'დ',    
    pron:'d',    
    lat:'d',    
  },
  'eni': {
    letter:'ე',    
    pron:'e',    
    lat:'e',    
  },
  'vini': {
    letter:'ვ',    
    pron:'(eng)ValVe',    
    lat:'v',    
  },
  'zeni': {
    letter:'ზ',    
    pron:'(eng)Zoo',    
    lat:'z',    
  },
  'tani': {
    letter:'თ',    
    pron:'t',    
    lat:'t',    
  },
  'ini': {
    letter:'ი',    
    pron:'i',    
    lat:'i',    
  },
  'k_ani': {
    letter:'კ',    
    pron:'(eng)baCK',    
    lat:'k',    
  },
  'lasi': {
    letter:'ლ',    
    pron:'l',    
    lat:'l',    
  },
  'mani': {
    letter:'მ',    
    pron:'m',    
    lat:'m',    
  },
  'nari': {
    letter:'ნ',    
    pron:'n',    
    lat:'n',    
  },
  'oni': {
    letter:'ო',    
    pron:'o',    
    lat:'o',    
  },
  'p_ari': {
    letter:'პ',    
    pron:'p`',    
    lat:'p',    
  },
  'zhani': {
    letter:'ჟ',    
    pron:'(fr)Jour',    
    lat:'z',    
  },
  'rae': {
    letter:'რ',    
    pron:'(it)teRRa',    
    lat:'r',    
  },
  'sani': {
    letter:'ს',    
    pron:'(eng)Sand',    
    lat:'s',    
  },
  't_ari': {
    letter:'ტ',    
    pron:'tʼ',    
    lat:'t',    
  },
  'uni': {
    letter:'უ',    
    pron:'u',    
    lat:'u',    
  },
  'pari': {
    letter:'ფ',    
    pron:'(es)Peso',    
    lat:'p',    
  },
  'kari': {
    letter:'ქ',    
    pron:'(eng)Kiss',    
    lat:'k',    
  },
  'ghani': {
    letter:'ღ',    
    pron:'(es)amiGo',    
    lat:'g',    
  },
  'q_ari': {
    letter:'ყ',    
    pron:'qʼ',    
    lat:'q',    
  },
  'shini': {
    letter:'შ',    
    pron:'(eng)SHeep',    
    lat:'sh',    
  },
  'chini': {
    letter:'ჩ',    
    pron:'(eng)CHurCH',    
    lat:'ch',    
  },
  'tsani': {
    letter:'ც',    
    pron:'(de)Zeit',    
    lat:'ts',    
  },
  'dzili': {
    letter:'ძ',    
    pron:'(cat)doTZe',    
    lat:'dz',    
  },
  'ts_ili': {
    letter:'წ',    
    pron:'tsʼ',    
    lat:'ts',    
  },
  'ch_ari': {
    letter:'ჭ',    
    pron:'chʼ',    
    lat:'ch',    
  },
  'khani': {
    letter:'ხ',    
    pron:'(es)ojo',    
    lat:'j',    
  },
  'jani': {
    letter:'ჯ',    
    pron:'(eng)Jump',    
    lat:'j',    
  },
  'hae': {
    letter:'ჰ',    
    pron:'(eng)High',    
    lat:'h',    
  },
} as GeoAlphabet