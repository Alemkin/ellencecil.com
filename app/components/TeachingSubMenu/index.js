import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './index.scss'

const MenuLink = ({ route, title, currentRoute }) =>
  <Link to={route} className={'sub-link' + (route === currentRoute ? ' selected' : '')} title={title}>
    <span className='title'>{title}</span>
  </Link>

const TeachingSubMenu = ({ location }) =>
  <nav className='teaching-sub-menu-links text-center'>
    <MenuLink currentRoute={location.pathname} route='/teaching/diversitystatement' title='Diversity Statement' />
    <MenuLink currentRoute={location.pathname} route='/teaching/teachingphilosophy' title='Teaching Philosophy' />
    <MenuLink currentRoute={location.pathname} route='/teaching/observations' title='Observations' />
    <MenuLink currentRoute={location.pathname} route='/teaching/feedback' title='Student Feedback' />
    <MenuLink currentRoute={location.pathname} route='/teaching/2135' title='ENC 2135' />
    <MenuLink currentRoute={location.pathname} route='/teaching/3493' title='ENC 3493' />
  </nav>

export default withRouter(TeachingSubMenu)
