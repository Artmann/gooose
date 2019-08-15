import React, { Fragment } from 'react';

import EventPropType from '../prop-types/event';
import PropTypes from 'prop-types';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import media from '../styled-components/media';
import styled from 'styled-components';

const Event = styled.div`
  border-left: ${ props => props.isLast ? 'none' : 'solid 1px #A0AEC0' };
  color: #A0AEC0;
  position: relative;
  padding: 1rem 1rem 2rem;
`;

const EventIcon = styled.div`
  background: #fff;
  left: -0.75rem;
  font-weight: 300;
  font-size: 1.5rem;
  position: absolute;
  top: 0rem;
`;

const EventText = styled.div`
  color: #4A5568;
  font-size: 0.8rem;
  margin-top: -0.4rem;
  padding-left: 1rem;

  ${ media.desktop`
    max-width: 32rem;
  `}
`;

const EventTime = styled.p`
  color: #718096;
  margin-top: 1rem;
`;

const BoldText = styled.span`
  color: #343942;
  font-weight: 600;
`;

const textGenerators = {
  'card.comment.created': ({ data, user }) => (
    <Fragment>
      <p>
        <BoldText>{ user.name }</BoldText> left a comment.
      </p>
      <p>
        { data.text }
      </p>
    </Fragment>
  ),
  'card.created': ({ user }) => (
    <p>
      Created by <BoldText>{ user.name}</BoldText>
    </p>
  ),
  'card.moved': ({ data, user }) => (
    <p>
      <BoldText>{ user.name}</BoldText> moved the card from <i>{ data.origin }</i> to <i>{ data.destination }</i>
    </p>
  )
};

const icons = {
  'card.created': 'fa-heart',
  'card.moved': 'fa-hand-paper',
  'card.comment.created': 'fa-comments',
};

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo();

function formatDate(timestamp) {
  const date = new Date(timestamp);

  return `${timeAgo.format(date)}.`;
}

function TimelineEvent({ event, isLast }) {
  const { name, timestamp } = event;

  const text = textGenerators.hasOwnProperty(name) ? textGenerators[name](event) : null;

  return (
    <Event isLast={isLast}>
      <EventIcon>
        <i className={ `far ${icons[name]}` } data-test-id="icon"></i>
      </EventIcon>
      <EventText>
        <div data-test-id="text">
          { text }
        </div>
        <EventTime>
          <span title={timestamp} data-test-id="timestamp">
            { formatDate(timestamp) }
          </span>
        </EventTime>
      </EventText>
    </Event>
  );
}

TimelineEvent.propTypes = {
  EventPropType,
  isLast: PropTypes.bool.isRequired
}

export default TimelineEvent;
