import React from 'react'
import Header from 'components/header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'screens/Home'
import About from 'screens/About'
import Faq from 'screens/Faq'
import ContactUs from 'screens/ContactUs'

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Faq" component={Faq} />
          <Route exact path="/ContactUs" component={ContactUs} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
