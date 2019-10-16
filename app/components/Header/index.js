import React from 'react'
import { translateComponent } from '../../utils/translate'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './index.scss'

const t = translateComponent('Header')

const MenuLink = ({ route, title, currentRoute }) =>
  <Link to={route} className={'header-link d-inline-block' + (route === currentRoute ? ' selected' : '')} title={title}>
    <span className='title'>{title}</span>
  </Link>

const Header = ({ location }) =>
  <div className='header align-items-center'>
    <Link to='/'><h1 title={t('title')} className='header-title'>{t('title')}</h1></Link>
    <nav className='header-links'>
      <MenuLink currentRoute={location.pathname} route='/' title='home' />
      <MenuLink currentRoute={location.pathname} route='/cv' title='cv' />
      <MenuLink currentRoute={location.pathname} route='/scholarship' title='scholarship' />
      <MenuLink currentRoute={location.pathname} route='/writingcenter' title='writing center' />
      <MenuLink currentRoute={location.pathname} route='/teaching' title='teaching' />
    </nav>
  </div>

export default withRouter(Header)
