import React from 'react'

const NavContext = React.createContext()

let initialState = {
  left:{
    visible:false,
    icon:'icon-previous',
    onClick: null
  },
  center:{
    visible:false,
    icon:'icon-goto',
    onClick: null
  },
  right:{
    visible:true,
    icon:'icon-next',
    onClick: ()=>{ console.log('click'); }
  },
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState
    case "show":
      // return { ...state, left: state.name = action.payload}
      state.left.visible =  action.payload
      return {...state}
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