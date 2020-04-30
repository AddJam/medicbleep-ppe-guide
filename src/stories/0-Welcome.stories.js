import React from 'react'
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';
import PageTitle from '../components/PageTitle'

export default {
  title: 'Welcome',
  component: PageTitle,
}

export const ToStorybook = () => <PageTitle title="Page Title" />

ToStorybook.story = {
  name: 'Page Title',
}
