import React, { Fragment, useState } from 'react'
import PPEItems from 'components/ppeItems'
import PageTitle from 'components/PageTitle'
import PPEGuides from 'components/ppeGuides'

const Home = (props) => {
  const { ppeGuides, ppeItems } = props
  return (
    <Fragment>
      <PageTitle title="PPE Checklist" />
      <p>For health and social care settings</p>
      <PPEGuides ppeGuides={ppeGuides} />
      <PPEItems items={ppeItems} />
    </Fragment>
  )
}

export default Home
