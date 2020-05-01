import React from 'react'
import Header from 'components/header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'screens/Home'
import About from 'screens/About'
import Faq from 'screens/Faq'
import ContactUs from 'screens/ContactUs'
import { GlobalStyle, MainContainer } from 'assets/css/GlobalStyle'
import ApiCall from 'api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Response from 'state/Response';

const App = () => {
  const getApiResponseData = () => {
    ApiCall((response) => {
      const {data} = response;
      const {ppe_items, ppe_guides} = data;
      console.log('data recieved', ppe_items);
      console.log('data recieved', ppe_guides);
    });
  }
  getApiResponseData();
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

const mapStateToProps = (state, ownProps) => {
  const storeObject = {};

  return storeObject;
};


function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateDialogsList: Response.saveResponseData,
    }, dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
