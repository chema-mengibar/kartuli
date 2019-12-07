
import {PanelListProps} from '.'

interface Mocks {
  [key:string]: PanelListProps
}

export default {
  default: {
    id: "conversations",
    links:[
      {label:'label-1', target:'target-1'},
      {label:'label-2', target:'target-2'},
      {label:'label-3', target:'target-3'},
      {label:'label-4', target:'target-4'},
    ],
    onClose: ()=>{ console.log('close story') },
  }
} as Mocks;
