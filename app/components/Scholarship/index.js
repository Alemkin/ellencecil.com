import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const WritingCenter = () =>
  <Row className='scholarship mt-4 page-wrapper' tag={'main'}>
    <Col xs={12} xl={6}>
      <h1>{'Scholarship'}</h1>

      <h6><b>{'Disability'}</b></h6>
      <p>{'Cecil-Lemkin, Ellen. “Human-Animal Entanglements: Navigating Access with an Emotional Support Animal.” (Under Review)'}</p>
      <p>{'Cecil-Lemkin, Ellen and Michael Neal. “Moving Towards Accessibility: Addressing Two Myths of Universal Access in Online Instruction.” (Proposal Accepted)'}</p>
      <p>{'“Considering Collaboration through a Disability Perspective.” Feminisms and Rhetorics. Harrisonburg, VA. November 2019.'}</p>
      <p>{'“Have Dog, Will Tutor: An Autoethnographic Account of Tutoring with a Service Animal.” International Writing Center Association Annual Conference. Atlanta, GA. October 2018.'}</p>
      <p>{'“Human-Animal Entanglements: Reflections on Training a Service Animal.” Critical Disability Studies Student Association Conference. York University, Canada. April 2018.'}</p>
      <p>{'“Restrictions on Language for a Disabled Graduate Student.” Conference on College Composition and Communication. Kansas City, MO. March 2018.'}</p>
      <p>
        <a href='http://scsuconnect.stcloudstate.edu/p5h32y3zc4c/' target='_blank'>
          {'“'}
          <u>
            {'“Madness in Academia: Stories and Sense-making from Neurodiverse Perspectives'}
          </u>
          {'.”'}
        </a>
        {'Disability Roundtable. Survive & Thrive. Online. April 2017.'}
      </p>

      <h6><b>{'Collaboration'}</b></h6>
      <p>{'“Writing Together: Students’ Perceptions on Collaboration.” Thomas R. Watson Conference. Louisville, KY. October 2018.'}</p>
      <p>
        <a href='https://prezi.com/view/cveTGJGGGHRSORxFg0Vc/' target='_blank'>
          {'“'}
          <u>
            {'Graduate Students Digitally Collaborating'}
          </u>
          {'.”'}
        </a>
        {'Computers and Writing. Findlay, Ohio. June 2017'}
      </p>
      <p>
        <a href='https://drive.google.com/open?id=1vxweGqm_46fJwYSLSA1JD6N5hC7Vwl2jfLWG5psiGxc' target='_blank'>
          {'“'}
          <u>
            {'Writing Communities Across Boundaries: Student Experiences with Digital Collaboration'}
          </u>
          {'.”'}
        </a>
        {'Computers and Writing. Rochester, New York. May 2016.'}
      </p>
      <p>{'“Digital Collaboration and Graduate Students.” Graduate Research Network. Rochester, NY. May 2016.'}</p>
      <p>
        <a href='https://buildingcollaborativecommunities.wordpress.com/' target='_blank'>
          {'“'}
          <u>
            {'Building Collaborative Communities: Empowering Students through Community-Engaged Writing'}
          </u>
          {'.”'}
        </a>
        {'Conference on Community Writing. Boulder, Colorado. October 2015.'}
      </p>
      <p>
        <a href='https://docs.google.com/document/d/1UlMnJdxcw8_qmAJS0EP2jQL_YsrPP0xI0pAkqWREAwA/edit?usp=sharing' target='_blank'>
          {'“'}
          <u>
            {'Creating Connections: Student Perceptions of Collaboration in First-Year Writing Classrooms'}
          </u>
          {'.”'}
        </a>
        {'Qualitative Research Network. Tampa, Florida. March 2015.'}
      </p>
      <p>
        <a href='https://docs.google.com/presentation/d/17SjIURnNqxSFFbaZHliC72FSYg1lbPUSZ9jOYLsJM5w/edit?usp=sharing' target='_blank'>
          {'“'}
          <u>
            {'Navigating Student Collaborative Spaces'}
          </u>
          {'.”'}
        </a>
        {'MEGAA Symposium. Oxford, Ohio. March 2015.'}
      </p>

      <h6><b>{'Writing Programs'}</b></h6>
      <p>{'Cecil-Lemkin, Ellen, Jennifer Enoch, Megan Keaton, and Travis Maynard. “Archival Internships as Techne: Teaching the Archive through the Museum of Everyday Writing’s Undergraduate Internship.” Teaching Rhetoric and Composition Through the Archives, edited by Tarez Samra Graban and Wendy Hayden. (Accepted Manuscript)'}</p>
      <p>{'Cecil-Lemkin, Ellen. “Managing Power: Collaborative Models of Writing Program Administration.” (In Progress)'}</p>
      <p>{'“Decoding [Academic] Systems: Writing Centers as Mentorship Sites." International Writing Center Association Annual Conference. Chicago, IL. November 2017.'}</p>
      <p>
        <a href='https://drive.google.com/open?id=1OwkwgGStU6fztGIJO3ZpIyZ4PdcIjCceOd0mp7K8UOA' target='_blank'>
          {'“'}
          <u>
            {'Cultivating Collaboration and Distributing Power in Writing Program Administration'}
          </u>
          {'.”'}
        </a>
        {'Conference on College Composition and Communication. Portland, Oregon. March 2017.'}
      </p>

      <h6><b>{'Embodied Rhetoric'}</b></h6>
      <p>{'Cecil-Lemkin, Ellen and Kyllikki Rytov. “An Ethic of Rhetorical Touch: Intentional Strategies for Embodied Teaching.” (In Progress)'}</p>
      <p>{'"Invoking the Body: Touch and Making Meaning." Feminisms and Rhetorics. Dayton, OH. October 2017.'}</p>
    </Col>
    <Col xs={12} xl={6} className='text-center'>
      <img className='mb-4 mr-4' title='4 Happy Scholars' alt='Ellen sits to the left of two other scholars behind a table, smiling at the camera. Another scholar is projected up on screen in a video call.' src={require('../../../images/4sittingscholars.png')} />
      <img title='4 Happy Scholars Plus Rosie' alt='Ellen stands to the right of 3 other scholars, posing for a picture. Rosie sits at her feet looking away from the camera.' src={require('../../../images/4standingscholars.png')} />
    </Col>
  </Row>

export default WritingCenter
