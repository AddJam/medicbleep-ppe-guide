import React, { Fragment } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import PageTitle from 'components/PageTitle'
import styled from 'styled-components'
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { colors } from 'config'

const Guide = (props) => {
  const { ppeGuides, match } = props
  const { id } = match.params
  const data = _.find(ppeGuides, ['id', parseInt(id, 0)])
  if (data) {
    const { fields } = data
    const { title, description, steps, video_url } = fields
    return (
      <Fragment>
        <GuideSection>
          <Link to="/" className="backLink">
            <FontAwesomeIcon icon={faChevronLeft} /> Back to overview
          </Link>
          <PageTitle title={title} />
          <p>{description}</p>
          <p>
            <b>TODO:</b> {video_url}
          </p>
          {steps && steps.length > 0 ? (
            <ListGroup variant="flush" as="ol">
              {steps.map((data, key) => (
                <ListGroup.Item as="li" key={key}>
                  {data.content}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : null}
        </GuideSection>
      </Fragment>
    )
  }
  return true
}

export default Guide

const { blue } = colors
export const GuideSection = styled.div`
  .backLink {
    color: ${blue};
  }
  .list-group {
    padding-left: 20px;
  }
  li.list-group-item {
    display: list-item;
    padding: 0;
    border: none;
    margin-bottom: 10px;
  }
`
