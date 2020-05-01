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
import ApiCall from 'api';

const App = () => {
  ApiCall(res=>{
    console.log('res-', res)
  })
  const [ppeGuides, setPPEGuides] = useState([
    {
      id: 1,
      fields: {
        title: "Putting on PPE",
        video_url: "https://www.nhsprofessionals.nhs.uk/en/e-Library/Useful-Information/COVID-19-Donning-of-Personal-Protective-Equipment",
        short_description: "Safely put your PPE on",
        description: "Before putting on the PPE, perform hand hygiene. Use alcohol handrub or gel or soap and water. Make sure you are hydrated and are not wearing any jewellery, bracelets, watches or stoned rings.",
        steps: [
          {
            content: "Put on your plastic apron, making sure it is tied securely at the back",
            order: "1"
          }
        ]
      }
    },
    {
      id: 2,
      fields: {
        title: "Putting on PPE",
        video_url: "https://www.nhsprofessionals.nhs.uk/en/e-Library/Useful-Information/COVID-19-Donning-of-Personal-Protective-Equipment",
        short_description: "Safely put your PPE on",
        description: "Before putting on the PPE, perform hand hygiene. Use alcohol handrub or gel or soap and water. Make sure you are hydrated and are not wearing any jewellery, bracelets, watches or stoned rings.",
        steps: [
          {
            content: "Put on your plastic apron, making sure it is tied securely at the back",
            order: "1"
          }
        ]
      }
    },
  ]);
  return (
    <Container>
      <Router>
        <Header />
        <GlobalStyle />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={()=><Home ppeGuides={ppeGuides} />} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Faq" component={Faq} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/guide/:id" component={<Guide ppeGuides={ppeGuides} />} />
          </Switch>
        </MainContainer>
      </Router>
    </Container>
  )
}

export default App
