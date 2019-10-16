import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Biography from '../Biography'
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
