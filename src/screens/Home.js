import React, { Fragment } from 'react'
import PPEItems from 'components/ppeItems'
import PageTitle from 'components/PageTitle'
import PPEGuides from 'components/ppeGuides'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContainer>
      <PageTitle title="PPE Checklist" />
      <p>For health and social care settings</p>
      <PPEGuides />
      <PPEItems />
    </HomeContainer>
  )
}

export default Home

export const HomeContainer = styled.div`
  @media (max-width: 767px) {
    h1 {
      text-align: center;
      + p {
        text-align: center;
      }
    }
  }
`
