import Config from '../config'

const routes = [
  {
    category:'main',
    label:{
      de:'Home',
      en:'Home',
    },
    link:'/'
  },
  {
    category:'main',
    label:{
      de:'Menu',
      en:'Menu',
    },
    link:'/menu'
  },
  {
    category:'main',
    label:{
      de:'lesson',
      en:'lesson',
    },
    link:'/lesson'
  },
  {
    category:'lesson',
    label:{
      de:`>>Letters`,
      en:`>>Letters`,
    },
    link:`/letters`
  },
  {
    category:'lesson',
    label:{
      de:`>>Numbers`,
      en:`>>Numbers`,
    },
    link:`/numbers`
  }
]


const langKey = Config.lang || 'en'

export default (category) => routes
.filter( item => item.category === category)
.map( item => (
  { 
    link: item.link, 
    label: item.label[langKey]
  }
))
