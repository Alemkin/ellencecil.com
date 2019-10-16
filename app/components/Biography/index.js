import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const Biography = () =>
  <Row className='biography mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={6} className='text-center'>
      <img title='Ellen and Rosie the service dog' alt='Ellen smiles into the camera, kneeling down next to her great pyrynees service dog' src={require('../../../images/biopic.png')} />
    </Col>
    <Col xs={12} xl={6}>
      <h4>{'Ph.D. Rhetoric and Composition Graduate Student Florida State University'}</h4>
      <br />
      <p>
        <a className='d-block' href='mailto:emc15j@my.fsu.edu'>{'emc15j@my.fsu.edu'}</a>
        <span>{'@ellen_cecil'}</span>
      </p>
      <p>
        {'Currently, I am a Ph.D. candidate in Rhetoric and Composition at Florida State University. I completed my Masters in Rhetoric and Composition at Miami University (Ohio) in 2015. I received my BA in English Literature from University of Central Florida in 2013. My research interests include collaborative writing, writing centers, and disability. I identify as disabled and work with my service dog, Rosie. She is a sassy, strong willed Great Pyrenees. Presently, I am the Coordinator for FSU’s Reading Writing Center, and I teach courses related to composition and peer tutoring at FSU.'}
      </p>
      <p>
        {'When I\'m not focusing on my research and teaching, I enjoy fostering animals through the Leon County Humane Society. In the past two years, I\'ve fostered and found homes for over 20 cats and dogs. I also find joy in caring for my own pets, which includes a dog (Maple), two cats (Clint and Grayson), and five chickens.'}
      </p>
      <p>
        {'Feel free to follow me on Twitter '}
        <a href='https://twitter.com/ellen_cecil' target='_blank'><u>{'@ellen_cecil'}</u>{'.'}</a>
      </p>
    </Col>
  </Row>

export default Biography
