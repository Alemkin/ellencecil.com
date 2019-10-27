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
import '../observations/feb122016teaching.pdf'
import '../observations/margaretstudentfeedback.pdf'

import '../enc2135course/activity1.pdf'
import '../enc2135course/activity2.pdf'
import '../enc2135course/activity3.pdf'
import '../enc2135course/calendar.pdf'
import '../enc2135course/rubric1.pdf'
import '../enc2135course/rubric2.pdf'
import '../enc2135course/rubric3.pdf'
import '../enc2135course/sample1.pdf'
import '../enc2135course/sample2.pdf'
import '../enc2135course/sample3.pdf'
import '../enc2135course/syllabus.pdf'

import '../enc3493course/calendar.pdf'
import '../enc3493course/sample1.pdf'
import '../enc3493course/sample2.pdf'
import '../enc3493course/sample3.pdf'
import '../enc3493course/syllabus.pdf'

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
