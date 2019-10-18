import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import './service'
import './sagas'

import '../images/favicon.ico'
import '../observations/nov302017tutor.pdf'
import '../observations/oct262016tutor.pdf'

import { initTranslator } from './utils/translate'
initTranslator()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
