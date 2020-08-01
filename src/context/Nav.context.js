import React, {useContext} from 'react'

const NavContext = React.createContext()

let initialState = {
  items:{  
    left:{
      id:'nav-footer-left',
      disabled:false,
      visible:true,
      label:'Previous',
      icon:'icon-previous', // search IconsList
      onClick: ()=>{}
    },
    center:{
      id:'nav-footer-center',
      disabled:false,
      visible:true,
      label:'Index',
      icon:'icon-goto', // search IconsList
      onClick: ()=>{}
    },
    right:{
      id:'nav-footer-right',
      disabled:false,
      visible:true,
      label:'Next',
      icon:'icon-next', // search IconsList
      onClick: ()=>{}
    },
  },
  get visibles() {
    return [
      this.items.left.visible, 
      this.items.center.visible,
      this.items.right.visible 
    ]
  }
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState
    case "setVisibles":
      state.items.left.visible =  action.payload[0]
      state.items.center.visible =  action.payload[1]
      state.items.right.visible =  action.payload[2]
      return {...state }
    case "setPropsToItem":
      // todo: add icon?
      return { 
        ...state,
        items:{
          ...state.items,
          [action.payload.item]:{ 
          ...state.items[action.payload.item],
           onClick: action.payload.fct,
           label:( action.payload.label) ? action.payload.label : state[action.payload.item].label
        }}
     }
  }
};

export const NavContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { navState: state, navDispatch: dispatch }

  return (
    <NavContext.Provider value={value}>
      {props.children}
    </NavContext.Provider>
  );
}

export const getNavContext = () => { return NavContext }

export function useNavContext () {
  return useContext(NavContext)
}

export default NavContext


/* Usage:

import NavContext, { NavContextProvider } from './helpers/contexts/App.context'


  const { navDispatch } = useNavContext()
  navDispatch({ type: "setVisibles", payload: [false, true, true]})

*/