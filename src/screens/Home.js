import React, { Fragment } from 'react'
import PPEItems from 'components/ppeItems'
import PageTitle from 'components/PageTitle'
import PPEGuides from 'components/ppeGuides'

const Home = () => {
  return (
    <Fragment>
      <PageTitle title="PPE Checklist" />
      <p>For health and social care settings</p>
      <PPEGuides />
      <PPEItems />
    </Fragment>
  )
}

export default Home
