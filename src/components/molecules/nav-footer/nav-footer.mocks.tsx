import {ButtonBoxProps} from '../../atoms/button-box'

export default {
  default: {
    items:[
      { 
        id:'nav-footer--previous',
        label:'Previous',
        disabled: false,
        onClick: ()=>{ console.log('goto to previous')},
        icon: 'icon-next'
      },
      { 
        id:'nav-footer--go',
        label:'Go',
        disabled: false,
        onClick: ()=>{ console.log('goto to somewhere')},
        icon: 'icon-goto'
      },
      { 
        id:'nav-footer--prev',
        label:'Next',
        disabled: false,
        onClick: ()=>{ console.log('goto to next')},
        icon: 'icon-previous'
      },
    ]
  }
};
