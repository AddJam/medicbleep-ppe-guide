import React from "react";
import MainBody from './screens';
import Header from './components/header';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      screen: 'Home',
    }
  }

  /**
   * Function: Navigate the screen
   */
  navigateScreen = (screen) => {
    this.setState({ screen });
  }
  render(){
    return (
      <Container>
        <Header navigateScreen={(data) => this.navigateScreen(data)} />
        <MainBody {...this.state} />
      </Container>
    );
  }
}

export default App;
