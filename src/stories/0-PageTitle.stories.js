import React from 'react'
import PageTitle from '../components/PageTitle'

export default {
  title: 'Welcome',
  component: PageTitle,
}

export const ToStorybook = () => <PageTitle title="Page Title" />

ToStorybook.story = {
  name: 'Page Title',
}
