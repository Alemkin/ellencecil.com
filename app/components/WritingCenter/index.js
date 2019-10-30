import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const WritingCenter = () =>
  <Row className='writing-center mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={5} className='text-center'>
      <h1 className='mb-4'>{'Writing Center'}</h1>
      <img title='Service Dog Rosie is a Tutor' alt='Rosie the service dog looks into the camera with a dog grin, and a sign in front of her that says "Reading and Writing Tutor"' src={require('../../../images/rosietutor.png')} />
    </Col>
    <Col xs={12} xl={7}>
      <p>
        {'I started working in writing centers when I was an undergraduate at University of Central Florida (UCF). I worked at the University Writing Center (UWC) at UCF for two years as a tutor. During my time at the UWC, I fell in love with working one-on-one with students to develop their skills in writing. Later, I was advanced to the position of Mentor Tutor and I took on formal and informal training responsibilities for new tutors. My passion for working with and mentoring students spurred me to seek out advanced degrees that had an emphasis on teaching. When I found myself at Florida State University (FSU), I again sought out opportunities to work as a tutor. This lead to my assistantship with the Reading Writing Center as a tutor, and later, as the Coordinator for the RWC.'}
      </p>
      <p>
        {'As the Coordinator for the RWC, I worked under the director and had several different duties, these included developing training material for new tutors, working with faculty across the campus to institute writing into their classrooms, managing undergraduate and graduate tutoring schedules, and developing promotional materials. I particularly enjoyed working with tutors to develop their tutoring skill sets and belief in their tutoring abilities. I see my ability to encourage and mentor new tutors as one of my strengths as an administrator and a quality that can greatly benefit the tutors wherever I end up working.'}
      </p>
      <p>
        {'This dedication to developing strong and successful tutors led to my appointment as the instructor of incoming peer tutors in ENC 3493. This course is the first step students must take before they are allowed to tutor in the RWC. As such, this course is designed to immerse potential new tutors in writing and writing center theory, with a strong focus on the practical application of these theories to their tutoring practices. My goal for this course was to expose students to a variety of different types of students and situations that they may encounter in the writing center. While the course readings are significant for establishing their initial understanding of these concepts, I felt that the detailed reflection I weaved throughout the course was particularly important. One of the ways I had students reflect on their tutoring sessions or observations was through in-class reflection. During the beginning of the class, I had students talk about the successes and challenges they faced during the week. When students encounter challenges, I encouraged the class to brainstorm various approaches they could take if they were to find themselves in that situation. This type of structured reflection prepared the new tutors for new encounters and to critically think about the choices they make during their sessions.'}
      </p>
      <p>
        {'Please look below for links to a few observation letters written about my tutoring:'}
      </p>
      <p>
        <a href='/observations/oct262016tutor.pdf' target='_blank'>{'Writing Center Observation October 26, 2016'}</a>
      </p>
      <p>
        <a href='/observations/nov302017tutor.pdf' target='_blank'>{'Writing Center Observation November 30, 2017'}</a>
      </p>
    </Col>
  </Row>

export default WritingCenter
