import React from 'react'
import Home from './Home'
import About from './About'
import Faq from './Faq'
import ContactUs from './ContactUs'

const MainBody = (props) => {
  const { screen } = props
  let returnScreen
  switch (screen) {
    case 'About':
      returnScreen = <About {...props} />
      break

    case 'Faq':
      returnScreen = <Faq {...props} />
      break

    case 'ContactUs':
      returnScreen = <ContactUs {...props} />
      break

    default:
      returnScreen = <Home {...props} />
      break
  }
  return returnScreen
}

export default MainBody
