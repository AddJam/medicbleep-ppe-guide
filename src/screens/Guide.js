import React, {Fragment} from 'react'
import PageTitle from 'components/PageTitle';
import styled from 'styled-components'
import { ListGroup } from 'react-bootstrap';

const Guide = (props) => {
    console.log('guide props--', props.match);
  return (
    <Fragment>
        <GuideSection>
      <PageTitle title="Putting on PPE" />
      <p>Before putting on the PPE, perform hand hygiene. Use alcohol handrub or gel or soap and water. Make sure you are hydrated and are not wearing any jewellery, bracelets, watches or stoned rings.</p>
    <ListGroup variant="flush" as="ol">
        <ListGroup.Item as="li">Put on your plastic apron, making sure it is tied securely at the back</ListGroup.Item>
        <ListGroup.Item as="li">Put on your plastic apron, making sure it is tied securely at the back</ListGroup.Item>
    </ListGroup>
    </GuideSection>
    </Fragment>
  )
}

export default Guide

export const GuideSection = styled.div`
    .list-group{
        padding-left: 20px;
    }
    li.list-group-item{
        display: list-item;
        padding: 0;
        border: none;
    }
`;