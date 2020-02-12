import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Biography from '../Biography'
import WritingCenter from '../WritingCenter'
import Scholarship from '../Scholarship'
import CurriculumVitae from '../CurriculumVitae'
import Teaching from '../Teaching'
import TeachingSubMenu from '../TeachingSubMenu'
import Observations from '../Observations'
import DiversityStatement from '../DiversityStatement'
import StudentFeedback from '../StudentFeedback'
import ENC2135 from '../ENC2135'
import ENC3493 from '../ENC3493'
import NotFound from '../NotFound'
import './index.scss'

const App = () =>
  <div className='ellen-main'>
    <Container fluid>
      <Row className='header-area mb-2'>
        <Col xs={12} xl={{ size: 8, offset: 2 }}>
          <Route path='/' component={Header} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={{ size: 8, offset: 2 }}>
          <Route path='/teaching' component={TeachingSubMenu} />
          <Switch>
            <Route exact path='/' component={Biography} />
            <Route exact path='/writingcenter' component={WritingCenter} />
            <Route exact path='/scholarship' component={Scholarship} />
            <Route exact path='/cv' component={CurriculumVitae} />
            <Route exact path='/teaching' component={Teaching} />
            <Route exact path='/teaching/diversitystatement' component={DiversityStatement} />
            <Route exact path='/teaching/observations' component={Observations} />
            <Route exact path='/teaching/feedback' component={StudentFeedback} />
            <Route exact path='/teaching/2135' component={ENC2135} />
            <Route exact path='/teaching/3493' component={ENC3493} />
            <Route path='' component={NotFound} />
          </Switch>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={{ size: 8, offset: 2 }}>
          <Route path='/' component={Footer} />
        </Col>
      </Row>
    </Container>
  </div>

export default App
