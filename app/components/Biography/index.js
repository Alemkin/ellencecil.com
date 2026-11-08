import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const Biography = () =>
  <Row className='biography mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={6} className='text-center'>
      <img title='Ellen and Rosie the service dog' alt='Ellen smiles into the camera, kneeling down next to her great pyrenees service dog' src={require('../../../images/biopic.png')} />
    </Col>
    <Col xs={12} xl={6}>
      <h4>{'Rhetoric and Composition Scholar'}</h4>
      <p>
        <a href='mailto:cecillemkin@wisc.edu'>{'cecillemkin@wisc.edu'}</a>
      </p>
      <p>
        {'(She/Her)'}
      </p>
      <p />
      <p>
        {"I'm an assistant teaching professor in the Writing Center at the University of Wisconsin-Madison whose scholarship explores the intersections of disability, institutions, and the contexts in which people make meaning. My investment in studying disability and neurodivergence stems, in part, from my own identification as disabled. Much of my administrative leadership work within the Writing Center is focused on creating an accessible environment for disabled students and tutors. In my one-to-one writing instruction with students, I've primarily worked with students who were referred to the Writing Center by the disability resource center. My focus on accessibility extends beyond individualized instruction to encompass developing targeted programming for disabled students. I've worked closely with the McBurney Disability Resource Center to create and deliver workshops on writing processes for disabled undergraduate and graduate students. In the classroom, I've developed ENGL 236: Writing for and about Disability, an undergraduate course that explores the intersection between disability and writing. Throughout this course, students use writing to explore their relationship to disability, identify access barriers, and imagine accessible futures."}  
      </p>
      <p>
        {"When I'm not focusing on my research and teaching, you can find me chasing after my three children or starting yet another craft project even though I haven't completed the previous one."}  
      </p>
    </Col>
  </Row>

export default Biography
