import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const ENC3416 = () =>
  <Row className='enc-2135 mt-4 page-wrapper' tag={'main'}>
    <Col xs={12}><h2>{'ENC 3416: Writing and Editing for Print and Online'}</h2></Col>
    <Col xs={12} lg={8}>
      <p>
        {'Description'}
      </p>
      <p>{'Course List'}</p>
      <ul>
        <li>Item.</li>
        <li>Item.</li>
        <li>Item.</li>
      </ul>
    </Col>
    <Col className='course-content' xs={12} md={4}>
      <h5>{'Course Content'}</h5>
      <div><a href='/enc3416course/syllabus.pdf' target='_blank'>{'Course Policy Sheet'}</a></div>
      <div><a href='/enc3416course/calendar.pdf' target='_blank'>{'Calendar'}</a></div>
      <div>{'Sample Student Projects'}</div>
      <ul>
        <li><a href='/enc3416course/sample1.pdf' target='_blank' rel='noopener noreferrer'>{'Project 1'}</a></li>
        <li><a href='https://museumofeverydaywriting.omeka.net/exhibits/show/http---museumofeverydaywriting' target='_blank' rel='noopener noreferrer'>{'Project 2'}</a></li>
        <li><a href='/enc3416course/sample3.pdf' target='_blank' rel='noopener noreferrer'>{'Project 3'}</a></li>
        <li><a href='https://kwalston98.wixsite.com/portfolio' target='_blank' rel='noopener noreferrer'>{'Project 4'}</a></li>
      </ul>
    </Col>
  </Row>

export default ENC3416
