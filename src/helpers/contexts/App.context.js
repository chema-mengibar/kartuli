import React from 'react'

const AppContext = React.createContext()

let initialState = {
  name:'Kartuli',
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState
    case "rename":
      return { ...state, name: state.name = action.payload}
  }
};

export const AppContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { stateApp: state, dispatchApp: dispatch }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export const getAppContext = () => { return AppContext }

export default AppContext


/* Usage:

import AppContext, { AppContextProvider } from './helpers/contexts/App.context'

*/