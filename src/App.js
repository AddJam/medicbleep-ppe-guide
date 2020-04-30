import React from 'react'
import Header from 'components/header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'screens/Home'
import About from 'screens/About'
import Faq from 'screens/Faq'
import ContactUs from 'screens/ContactUs'
import { GlobalStyle, MainContainer } from 'assets/css/GlobalStyle'

const App = () => {
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
          </Switch>
        </MainContainer>
      </Router>
    </Container>
  )
}

export default App
