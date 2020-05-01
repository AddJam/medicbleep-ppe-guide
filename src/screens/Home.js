import React, { Fragment, useState } from 'react'
import PPEItems from 'components/ppeItems'
import PageTitle from 'components/PageTitle';
import PPEGuides from 'components/ppeGuides';

const Home = (props) => {
  const [ppeItems, setPPEItems] = useState([
    {
      id: 1,
      fields: {
        name: 'Face Shield',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
      },
    },
    {
      id: 2,
      fields: {
        name: 'Face Shield 2',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
      },
    },
    {
      id: 3,
      fields: {
        name: 'Face Shield 3',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
      },
    },
  ]);

  const { ppeGuides } = props;
  console.log('home--', props);

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