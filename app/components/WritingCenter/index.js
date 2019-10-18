import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const WritingCenter = () =>
  <Row className='writing-center mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={4} className='text-center'>
      <img title='Service Dog Rosie is a Tutor' alt='Rosie the service dog looks into the camera with a dog grim, and a sign in front of her that says Reading and Writing Tutor' src={require('../../../images/rosietutor.png')} />
    </Col>
    <Col xs={12} xl={8}>
      <p>
        {'I started working in writing centers when I was an undergraduate at University of Central Florida (UCF). I worked at the University Writing Center (UWC) at UCF for two years as a tutor. During my time at the UWC, I fell in love with working one-on-one with students to develop their skills in writing. Later, I was advanced to the position of Mentor Tutor and I took on formal and informal training responsibilities for new tutors. My passion for working with and mentoring students spurred me to seek out advanced degrees that had an emphasis on teaching. When I found myself at Florida State University (FSU), I again sought out opportunities to work as a tutor. This lead to my assistantship with the Reading Writing Center as a tutor, and later, as the Coordinator for the RWC.'}
      </p>
      <p>
        {'As the Coordinator for the RWC, I work under the director and have several different duties. My duties primarily include developing training material for new tutors, managing undergraduate and graduate tutoring schedules, and developing promotional materials. I particularly enjoy working with tutors to develop their tutoring skill sets and their belief in their tutoring abilities. I see my ability to encourage and mentor new tutors as one of my strengths as an administrator and a quality that can greatly benefit the tutors and tutees whenever I end up working.'}
      </p>
      <p>
        {'Please look below for links to a few observation letters written about my tutoring:'}
        <a href='/observations/oct262016tutor.pdf' target='_blank'>{'Writing Center Observation October 26, 2016'}</a>
        <a href='/observations/nov302017tutor.pdf' target='_blank'>{'Writing Center Observation November 30, 2017'}</a>
      </p>
    </Col>
  </Row>

export default WritingCenter
