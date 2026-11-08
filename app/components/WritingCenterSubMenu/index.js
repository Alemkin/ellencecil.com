import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './index.scss'

const MenuLink = ({ route, title, currentRoute }) =>
  <Link to={route} className={'sub-link' + (route === currentRoute ? ' selected' : '')} title={title}>
    <span className='title'>{title}</span>
  </Link>

const WritingCenterSubMenu = ({ location }) =>
  <nav className='writing-center-sub-menu-links text-center'>
    <MenuLink currentRoute={location.pathname} route='/writingcenter/tutor' title='Undergraduate Tutor Training' />
  </nav>

export default withRouter(WritingCenterSubMenu)
