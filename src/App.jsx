import React, { useEffect, useState, useContext } from "react";
import { hot } from 'react-hot-loader';

import Server from './helpers/server'
import AppContext from './helpers/contexts/App.context'

function App() {

  const { stateApp, dispatchApp } = useContext( AppContext )
  const [init, setInit] = useState( false )

  useEffect(() => {

  }, [])

  return (
    <>
      {stateApp.name}
    </>
  );
}

export default hot(module)(App);
