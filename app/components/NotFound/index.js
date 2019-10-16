import React from 'react'
import { translateComponent } from '../../utils/translate'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const t = translateComponent('NotFound')

const NotFound = () =>
  <div className='text-center'>
    <h1>{t('notfound')}</h1>
    <Link className='d-block not-found-link' to='/'><h5>{t('return')}</h5></Link>
  </div>

export default withRouter(NotFound)
