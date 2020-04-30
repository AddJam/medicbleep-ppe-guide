import React from 'react'
import PageTitle from '../components/PageTitle'

export default {
  title: 'Page Title',
  component: PageTitle,
}

export const ToStorybook = () => <PageTitle title="Page Title" />

ToStorybook.story = {
  name: 'Page Title',
}
