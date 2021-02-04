import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const WritingCenter = () =>
  <Row className='writing-center mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={5} className='text-center'>
      <img title='Service Dog Rosie is a Tutor' alt='Rosie the service dog looks into the camera with a dog grin, and a sign in front of her that says "Reading and Writing Tutor"' src={require('../../../images/rosietutor.png')} />
    </Col>
    <Col xs={12} xl={7}>
      <h1 className='mb-4'>{'Writing Center'}</h1>
      <p>
        {'I started working in writing centers when I was an undergraduate at University of Central Florida (UCF). I worked at the University Writing Center (UWC) at UCF for two years as a tutor. During my time at the UWC, I fell in love with working one-on-one with students to develop their skills in writing. Later, I was advanced to the position of Mentor Tutor and I took on formal and informal training responsibilities for new tutors. My passion for working with and mentoring students spurred me to seek out advanced degrees that had an emphasis on teaching. When I found myself at Florida State University (FSU), I again sought out opportunities to work as a tutor. This lead to my assistantship with the Reading Writing Center as a tutor, and later, as the Coordinator for the RWC.'}
      </p>
      <p>
        {'As the Coordinator for the RWC, I worked under the director and had several different duties, these included developing training material for new tutors, working with faculty across the campus to institute writing into their classrooms, managing undergraduate and graduate tutoring schedules, and developing promotional materials. I particularly enjoyed working with tutors to develop their tutoring skill sets and belief in their tutoring abilities. I see my ability to encourage and mentor new tutors as one of my strengths as an administrator and a quality that can greatly benefit the tutors wherever I end up working.'}
      </p>
      <p>
        {'Please look below for links to a few observation letters written about my tutoring:'}
      </p>
    </Col>
  </Row>

export default WritingCenter
