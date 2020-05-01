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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveResponseData } from 'state/Response'

const App = (props) => {
  const { ppeGuides, ppeItems } = props

  const getApiResponseData = () => {
    ApiCall((response) => {
      const { data } = response
      props.updateResponseData(data)
    })
  }

  if (!ppeGuides) {
    getApiResponseData()
  }

  return (
    <Container>
      <Router>
        <Header />
        <GlobalStyle />
        <MainContainer>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home ppeGuides={ppeGuides || []} ppeItems={ppeItems || []} />
              )}
            />
            <Route exact path="/About" component={About} />
            <Route exact path="/Faq" component={Faq} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route
              exact
              path="/guide/:id"
              component={(props) => (
                <Guide {...props} ppeGuides={ppeGuides || []} />
              )}
            />
          </Switch>
        </MainContainer>
      </Router>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  const storeObject = {
    ppeGuides: state.PpeReducer.responseData.ppe_guides,
    ppeItems: state.PpeReducer.responseData.ppe_items,
  }

  return storeObject
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateResponseData: saveResponseData,
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(App)
