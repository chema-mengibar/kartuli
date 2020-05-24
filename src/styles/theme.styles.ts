
interface Object {
  [key: string]:  any | string | Object;
}


interface Theme {
  [key: string]: Object;
}


export const theme = {
  colors:{
    base:{
      d2:'#565656',
      d1:'#757575',
      _:'#C4C4C4',
      l1:'#E5E5E5',
      l2:'#FFFFFF',
    },
    text:{
      _:'#000000',
      contrast:'#ffffff',
    },
    accent:{
      default:{
        d3:'#860321',
        d2:'#D54B6C',
        d1:'#DB4E6F',
        _:'#FF567A',
        l1:'#FF6B8A',
        l2:'#FF7E9A',
      },
      sky:{
        d:'#6888BB',
        _:'#9EBEF1',
        l:'#C7D9F7',
      },
      kiwi:{
        d:'#94BF41',
        _:'#ADDD4F',
        l:'#CEEB95',
      },
      lila:{
        d:'#7A40B5',
        _:'#964FDD',
        l:'#C095EB',
      },
      carmin:{
        _:'#E90263',
      }
    },
    extra:{
      success:{
        _:'#64DC70',
      },
    },
    neutral:{
      _:'#FDFCFC',
    }


  }
} as Theme