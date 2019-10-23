import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const Biography = () =>
  <Row className='biography mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={4} className='text-center'>
      <img title='Ellen and Rosie the service dog' alt='Ellen smiles into the camera, kneeling down next to her great pyrenees service dog' src={require('../../../images/biopic.png')} />
    </Col>
    <Col xs={12} xl={8}>
      <h4>{'Ph.D. Rhetoric and Composition Graduate Student Florida State University'}</h4>
      <br />
      <p>
        <a className='d-block' href='mailto:emc15j@my.fsu.edu'>{'emc15j@my.fsu.edu'}</a>
      </p>
      <p>
        {'My research agenda focuses on creating accessible environments with an emphasis on collaborative spaces for disabled students. While much of the accessibility research in composition emphasizes physical disabilities such as sight, hearing, or mobility, my project examines ways in which collaboration in composition classrooms has ignored the experiences of neurodiverse students, which includes anxiety, depression, autism, ADHD, and other related disabilities. As these disabilities tend to be more private, my own experiences as neurodiverse have become visible through my use of a service animal. This increased visibility has resulted in my public identification as disabled as well as my advocacy for other disabled academics and students (see my '}
        <a href='https://news.fsu.edu/student-stars/2019/09/01/ellen-cecil-lemkin/' target='_blank'>{'Star Student article'}</a>
        {' and '}
        <a href='https://news.fsu.edu/multimedia/radio/2019/10/10/doctoral-student-aims-to-destigmatize-conversation-on-disabilities/' target='_blank'>{'local radio interview'}</a>
        {'.) My current research project features disabled students’ voices as they describe their experiences with collaborative learning and writing in the classroom and reimagine a structure that is more accessible to their abilities. My goal through this research is to discover how writing classrooms can become more inclusive and to continue advocating for neurodiversity within academic settings.'}
      </p>
      <p>
        {'Currently, I am a Ph.D. candidate in Rhetoric and Composition at Florida State University where in addition to my research, I teach courses in digital literacy, genre awareness, and writing center theory. Previously, I worked as the coordinator for the Reading-Writing Center for two years. I completed my Masters in Rhetoric and Composition at Miami University (Ohio) in 2015. I received my BA in English Literature from University of Central Florida in 2013.'}
      </p>
      <p>
        {'When I\'m not focusing on my research and teaching, I enjoy fostering animals. In the past two years, I\'ve fostered and found homes for over 20 cats and dogs.'}
      </p>
    </Col>
  </Row>

export default Biography
