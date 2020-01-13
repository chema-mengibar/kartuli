import React from 'react'

const NavContext = React.createContext()

let initialState = {
  left:{
    disabled:false,
    visible:false,
    label:'',
    icon:'icon-previous',
    onClick: ()=>{}
  },
  center:{
    disabled:false,
    visible:false,
    label:'',
    icon:'icon-goto',
    onClick: ()=>{}
  },
  right:{
    disabled:false,
    visible:false,
    label:'',
    icon:'icon-next',
    onClick: ()=>{}
  },
  get visibles() {
    return [this.left.visible, this.center.visible, this.right.visible ]
  }
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState
    case "show":
      // return { ...state, left: state.name = action.payload}
      state.left.visible =  action.payload[0]
      state.center.visible =  action.payload[1]
      state.right.visible =  action.payload[2]
      return {...state}
    case "setItemClick":
      return { ...state, [action.payload.item]:{ ...state[action.payload.item], onClick: action.payload.fct} }
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

export default NavContext


/* Usage:

import NavContext, { NavContextProvider } from './helpers/contexts/App.context'

*/