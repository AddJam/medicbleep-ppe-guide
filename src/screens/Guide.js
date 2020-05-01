import React, { Fragment } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import PageTitle from 'components/PageTitle'
import styled from 'styled-components'
import { ListGroup, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { colors } from 'config'
import ReactPlayer from 'react-player'

const Guide = (props) => {
  const { ppeGuides, match } = props
  const { id } = match.params
  const data = _.find(ppeGuides, ['id', parseInt(id, 0)])
  if (data) {
    const { fields } = data
    const { title, description, steps, video_url } = fields
    const canPlay = ReactPlayer.canPlay(video_url)
    return (
      <Fragment>
        <GuideSection>
          <Link to="/" className="backLink">
            <FontAwesomeIcon icon={faChevronLeft} /> Back to overview
          </Link>
          <PageTitle title={title} />
          <p>{description}</p>
          {canPlay ? (
            <VideoCotainer>
              <ReactPlayer url={video_url} />
            </VideoCotainer>
          ) : (
            <Alert variant="danger">Wrong video URL</Alert>
          )}
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
  iframe {
    margin: 0 auto 35px auto;
  }
`

export const VideoCotainer = styled.div`
  margin: 40px 0 35px 0;
  > div {
    margin: 0 auto;
  }
`
