import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const ENC2135 = () =>
  <Row className='enc-2135 mt-4 page-wrapper' tag={'main'}>
    <Col xs={12}><h2>{'ENC 2135: Research, Genre, & Context'}</h2></Col>
    <Col xs={12} lg={8}>
      <p>
        {'ENC 2135 fulfills the second of two required composition courses at Florida State University. While continuing to stress the importance of critical reading, writing, and thinking skills emphasized in ENC 1101, as well as the importance of using writing as a recursive process involving invention, drafting, collaboration, revision, rereading, and editing to clearly and effectively communicate ideas for specific purposes, occasions, and audiences, ENC 2135 focuses on teaching research skills that allow students to effectively incorporate outside sources in their writing and to compose in a variety of genres for specific contexts.'}
      </p>
      <p>{'The course is composed of three main projects, each one focusing on helping students develop research skills and compose in a genre appropriate for a specific context'}</p>
      <ul>
        <li>The first unit asks students to conduct inquiry-based research on a topic within their interests, creating a research proposal, annotated bibliography, research report, and essay.</li>
        <li>The second unit asks students to complete a rhetorical analysis of two genres that you want to use for the final unit.</li>
        <li>The third unit asks students to remediate part of your research findings: creating three different representations in three different genres accompanied by a writer’s statement.</li>
      </ul>
    </Col>
    <Col className='course-content' xs={12} md={4}>
      <h5>{'Course Content'}</h5>
      <div><a href='/enc2135course/syllabus.pdf' target='_blank'>{'Course Policy Sheet'}</a></div>
      <div><a href='/enc2135course/calendar.pdf' target='_blank'>{'Calendar'}</a></div>
      <div>{'Sample Student Papers'}</div>
      <ul>
        <li><a href='/enc2135course/sample1.pdf' target='_blank'>{'Project 1'}</a></li>
        <li><a href='/enc2135course/sample2.pdf' target='_blank'>{'Project 2'}</a></li>
        <li><a href='/enc2135course/sample3.pdf' target='_blank'>{'Project 3'}</a></li>
      </ul>
      <div>{'Sample In-Class Activities'}</div>
      <ul>
        <li><a href='/enc2135course/activity1.pdf' target='_blank'>{'Movie Trailer Genres'}</a></li>
        <li><a href='/enc2135course/activity2.pdf' target='_blank'>{'Topic Generator'}</a></li>
        <li><a href='/enc2135course/activity3.pdf' target='_blank'>{'Concept Mapping'}</a></li>
      </ul>
      <div>{'Recent Student Evaluations'}</div>
      <ul>
        <li><a href='/enc2135course/evaluation1.pdf' target='_blank'>{'2020 Fall Course Eval'}</a></li>
      </ul>
    </Col>
  </Row>

export default ENC2135
