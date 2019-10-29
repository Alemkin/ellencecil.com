import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const ENC3493 = () =>
  <Row className='enc-3493 mt-4 page-wrapper' tag={'main'}>
    <Col xs={12}><h2>{'ENC 3493: Peer Tutoring'}</h2></Col>
    <Col xs={12} lg={8}>
      <img className='w-100' alt='An empty room with furniture set up for tutoring' src={require('../../../images/tutorcenter.png')} />
      <p className='mt-4'>
        {'ENC 3493: Peer Tutoring in the Reading-Writing Center is the first step students must take before they are allowed to tutor in the RWC for internship credit. As such, this course is designed to immerse potential new tutors in writing and writing center theory, with a strong focus on the practical application of these theories to their tutoring practices. My goal for this course was to expose students to a variety of different types of students and situations that they may encounter in the writing center. While the course readings are significant for establishing their initial understanding of these concepts, I felt that the detailed reflection I weaved throughout the course was particularly important. One of the ways I had students reflect on their tutoring sessions or observations was through in-class reflection. During the beginning of the class, I had students talk about the successes and challenges they faced during the week. When students encounter challenges, I encouraged the class to brainstorm various approaches they could take if they were to find themselves in that situation. This type of structured reflection prepared the new tutors for new encounters and to critically think about the choices they make during their sessions.'}
      </p>
    </Col>
    <Col className='course-content' xs={12} md={4}>
      <h5>{'Course Content'}</h5>
      <div><a href='/enc3493course/syllabus.pdf' target='_blank'>{'Course Policy Sheet'}</a></div>
      <div><a href='/enc3493course/calendar.pdf' target='_blank'>{'Calendar'}</a></div>
      <div>{'Sample Projects:'}</div>
      <ul>
        <li><a href='/enc3493course/sample1.pdf' target='_blank'>{'Project One'}</a></li>
        <li>
          {'Project Two'}
          <ul>
            <li><a href='/enc3493course/sample2.pdf' target='_blank'>{'Reflection'}</a></li>
            <li>{'Remediation'}</li>
          </ul>
        </li>
        <li><a href='/enc3493course/sample3.pdf' target='_blank'>{'Project Three'}</a></li>
      </ul>
    </Col>
  </Row>

export default ENC3493
