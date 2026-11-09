import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const WritingCenter = () =>
  <Row className='scholarship mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={6}>
      <h1>{'Scholarship'}</h1>
      <p>
        {"My research examines the intersections of disability, institutions, and the contexts in which people make meaning. Primarily, I've looked at neurodivergent people making meaning through writing within the institution of higher education. For example, my forthcoming, coauthored chapter “Crip Collaboration: How Disabled Scholars Co-create Knowledge” examines the reasons disabled and neurodivergent scholars choose to write collaboratively, often despite institutional barriers to collaboration. Additionally, I’ve explored how neurodivergent undergraduate students navigate collaborative writing projects in my article, “Expanding Access in Collaborative Writing Pedagogy.” For future projects, I plan to expand my scope to consider accessibility in institutions beyond higher education."}
      </p>
      <p>
        {'You can read my published scholarship in PDF format  by clicking on the links.'}
      </p>
      <p>
        <a href='https://1drv.ms/b/c/6b23d4e8ab261832/IQAru30ojJxpSK06lo7lnVsHATMGp1kLS8kQu65uCPt0XzE?e=ACfmEX' target='_blank' rel='noopener noreferrer'>
          Inviting Disability into the TPC Classroom
        </a>
      </p>
      <p>
        <a href='https://1drv.ms/b/c/6b23d4e8ab261832/IQAPkEXy5OZJRqagGXBdiq-cAXtIT453eAhk3Aa4-93dHLc?e=vkGxiu' target='_blank' rel='noopener noreferrer'>
          Keeping Quiet Rooms Quiet
        </a>
      </p>
      <p>
        <a href='https://1drv.ms/b/c/6b23d4e8ab261832/IQAyGCar6NQjIIBrYlcAAAAAAdZKimSydP7uQA0VyhW32Aw?e=n1pqmQ' target='_blank' rel='noopener noreferrer'>
          Expanding Access in Collaborative Writing Pedagogy
        </a>
      </p>
    </Col>
    <Col xs={12} xl={6} className='text-center'>
      <img className='mb-4 mr-4' title='4 Happy Scholars' alt='Ellen sits to the left of two other scholars behind a table, smiling at the camera. Another scholar is projected up on screen in a video call.' src={require('../../../images/4sittingscholars.png')} />
      <img title='4 Happy Scholars Plus Rosie' alt='Ellen stands to the right of 3 other scholars, posing for a picture. Rosie sits at her feet looking away from the camera.' src={require('../../../images/4standingscholars.png')} />
    </Col>
  </Row>

export default WritingCenter
