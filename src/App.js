import React, { useState } from 'react'
import MainBody from './screens'
import Header from './components/header'
import { Container } from 'react-bootstrap'

const App = () => {
  const [screen, navigateScreen] = useState('Home')
  return (
    <Container>
      <Header navigateScreen={(data) => navigateScreen(data)} />
      <MainBody screen={screen} />
    </Container>
  )
}

export default App
