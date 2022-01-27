import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from '@src/app'

import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * ROOT
 * Render the app
 */
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
