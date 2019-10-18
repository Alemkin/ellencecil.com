import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Biography from '../Biography'
import WritingCenter from '../WritingCenter'
import Scholarship from '../Scholarship'
import CurriculumVitae from '../CurriculumVitae'
import NotFound from '../NotFound'
import './index.scss'

const App = () =>
  <div className='ellen-main'>
    <Container fluid>
      <Row>
        <Col xs={12} xl={{ size: 8, offset: 2 }}>
          <Route path='/' component={Header} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={{ size: 8, offset: 2 }}>
          <Switch>
            <Route exact path='/' component={Biography} />
            <Route exact path='/writingcenter' component={WritingCenter} />
            <Route exact path='/scholarship' component={Scholarship} />
            <Route exact path='/cv' component={CurriculumVitae} />
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
