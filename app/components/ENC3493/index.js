import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const ENC3493 = () =>
  <Row className='enc-3493 mt-4 page-wrapper' tag={'main'}>
    <Col xs={12}><h2>{'ENC 3493: Peer Tutoring'}</h2></Col>
    <Col xs={12} lg={8}>
      <img className='w-100' alt='An empty room with furniture set up for tutoring' src={require('../../../images/tutorcenter.png')} />
      <h5>{'Course Description'}</h5>
      <p>
        {'This class explores acts of reading, writing, and composition: the people who do it, how they do it, and how to help others do it. The goals of this course ask that you:'}
      </p>
      <ul>
        <li>{'Develop an understanding of writing theory and practice based on both course readings and personal experience.'}</li>
        <li>{'Explore how learners approach writing, why these approaches are highly individualized, and how the writing center fits into the writing process.'}</li>
        <li>{'Discuss theory and practice revolving around assisting the students that commonly utilize the Reading and Writing Center, with special attention paid to the international and multilingual reach of FSU’s student population.'}</li>
        <li>{'Select an area of focus in writing tutoring and devote special attention to this area throughout the course.'}</li>
        <li>{'Develop skills as a tutor, through mentorship with a current tutor and tutoring individually in the FSU Reading and Writing Center or Digital Studio.'}</li>
      </ul>
      <p>
        {'The approach to tutoring discussed and explored focuses on providing audience-based feedback to students that allows them the opportunity to grow as writers, readers, and critical thinkers. Peer tutors in the Florida State University Reading and Writing Centers and Digital Studios provide guidance, feedback, and encouragement to help students understand options for completing writing assignments, becoming aware of the tools that improve writing, and building their confidence as writers.'}
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
      <div>{'Sample In-Class Activities:'}</div>
      <ul>
        <li>{'Activity One'}</li>
        <li>{'Activity Two'}</li>
        <li>{'Activity Three'}</li>
      </ul>
    </Col>
  </Row>

export default ENC3493
