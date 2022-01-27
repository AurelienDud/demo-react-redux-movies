import React, { FunctionComponent } from 'react'
import { BrowserRouter as RouteProvider } from "react-router-dom"
import { Provider as StoreProvider } from 'react-redux'
import store from '@src/store'
import Router from '@src/router'

/**
 * App
 * Setup providers
 */
const App:FunctionComponent = () => (
  <StoreProvider store={store}>
    <RouteProvider>
      <Router />
    </RouteProvider>
  </StoreProvider>
)

export default App
