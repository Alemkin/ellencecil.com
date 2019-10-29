import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const Teaching = () =>
  <Row className='teaching mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={6}>
      <img className='w-100' alt='Students at work in a tutoring center' src={require('../../../images/teaching1.jpeg')} />
      <img className='w-100' alt='Students at work in a tutoring center' src={require('../../../images/teaching2.jpeg')} />
    </Col>
    <Col xs={12} xl={6}>
      <p>
        {'In my time teaching a variety of writing courses at Florida State University and Miami University of Ohio, I have worked with a diverse range of students. For instance, I have taught multiple sections of an advanced writing course titled Writing and Editing in Print and Online (ENC 3416); this course helps students learn about composing in three spaces: the page, the screen, and the network. To better learn how to compose for these spaces, I created a service-learning project where we work with a community partner whose mission is to educate the public on service animals and provide affordable training and support to service animal teams.'}
      </p>
      <p>
        {'I have also taught Peer Tutoring in the Reading-Writing Center (ENC 3493); this course is the first step undergraduate students take to tutor in our writing center for internship credit. As such, this course is designed to immerse potential new tutors in writing and writing center theory, with a strong focus on the practical application of these theories to their tutoring practices. Part of this includes teaching students how work with a variety of writing with diverse identities and abilities.'}
      </p>
      <p>
        {'Even my teaching of general education composition is unique in that Florida State has developed a sophomore-level writing class that all university students take regardless of past AP, dual enrollment, or standardized test scores. This course (ENC 2135) teaches rhetorical awareness and genre theory in order to prepare students for writing success across the university. I have experience with teaching this course both online and face-to-face. In each of these courses, I institute principles of universal design for learning to better teach my students to analyze their writing and researching situations and to respond accordingly. My various teaching experiences have prepared me to teach first-year-writing courses as well as upper level writing and rhetoric courses.'}
      </p>
    </Col>
  </Row>

export default Teaching
