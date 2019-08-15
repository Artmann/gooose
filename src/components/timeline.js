import EventPropType from '../prop-types/event';
import PropTypes from 'prop-types';
import React from 'react';
import TimelineEvent from './timeline-event';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  margin: 1rem;
  padding: 1.5rem 1.75rem;
`;

function eventSorter(a, b) {
  const date1 = new Date(a.timestamp);
  const date2 = new Date(b.timestamp);

  if (date1 > date2) {
    return -1;
  }

  if (date1 < date2) {
    return 1;
  }

  return 0;
}

function Timeline({ events }) {
  return (
    <Container>
      {
        events.sort(eventSorter).map((event, index) => {
          return <TimelineEvent
            event={event}
            isLast={(index === events.length - 1)}
            key={index}
            data-test-event-id={event.id}
            />
        })
      }
    </Container>
  );
}

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    EventPropType
  ).isRequired
};

export default Timeline;
