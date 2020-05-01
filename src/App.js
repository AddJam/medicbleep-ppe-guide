import React, { useState } from 'react'
import Header from 'components/header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'screens/Home'
import About from 'screens/About'
import Faq from 'screens/Faq'
import ContactUs from 'screens/ContactUs'
import Guide from 'screens/Guide'
import { GlobalStyle, MainContainer } from 'assets/css/GlobalStyle'
import ApiCall from 'api'
import { useDispatch } from 'react-redux'
import { saveResponseData } from 'state/Response'

const App = () => {
  const dispatch = useDispatch()
  const getApiResponseData = () => {
    ApiCall((response) => {
      const { data } = response
      dispatch(saveResponseData(data))
    })
  }
  getApiResponseData()
  return (
    <Container>
      <Router>
        <Header />
        <GlobalStyle />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Faq" component={Faq} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/guide/:id" component={Guide} />
          </Switch>
        </MainContainer>
      </Router>
    </Container>
  )
}
export default App
