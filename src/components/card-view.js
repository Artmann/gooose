import { shape, string } from 'prop-types';

import React from 'react';
import marked from 'marked'
import styled from 'styled-components';

const skeletonStyle = `
  background: #E2E8F0;
  color: transparent;
  height: 12rem;
  overflow: hidden;
  width: 100;
`;

const Container = styled.div`
  background: #E2E8F0;
  color: #4A5568;
  line-height: 1.75;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  min-height: 100vh;
  padding: 2rem 0;
  width: 100%;
  
  p { margin: 0 0 0.75rem; }
`;

const CardText = styled.div`
  ${ props => props.skeleton && skeletonStyle }

  background: #fff;
  margin: 0 1rem 1rem;
  padding: 1.25rem 1.5rem;
`;

const Timeline = styled.div`
  background: #fff;
  margin: 0 1rem 1rem;
  padding: 1.25rem 1.5rem;
`;

const Event = styled.div`
  border-left: ${ props => props.isLast ? 'none' : 'solid 1px #A0AEC0' };
  color: #A0AEC0;
  position: relative;
  padding: 1rem 1rem 3rem;
`;

const EventIcon = styled.div`
  background: #fff;
  left: -0.75rem;
  font-weight: 300;
  font-size: 1.5rem;
  position: absolute;
  top: ${ props => props.isFirst ? '0' : '0.5rem' };
`;

function renderEvent({ name, data, timestamp}, isFirst, isLast) {
  const icons = {
    'card.created': 'fa-heart',
    'card.moved': 'fa-hand-paper',
    'card.comment.created': 'fa-comments',
  };

  return (
    <Event isLast={isLast}>
      <EventIcon isFirst={isFirst}>
        <i className={ `far ${icons[name]}` }></i>
      </EventIcon>
    </Event>
  );
}

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

function CardView({ card }) {
  const events = [
    { name: 'card.created', data: {}, timestamp: '2019-07-26 08:23:00' },
    { name: 'card.moved', data: { origin: 1, destination: 2 }, timestamp: '2019-07-27 12:23:12' },
    { name: 'card.comment.created', data: { text: 'Looking at all the options we should probably move to secure all the bases before they belong to someone else.' }, timestamp: '2019-07-28 14:32:21' }
  ];
  const skeleton = !card;
  const { text = '' } = card || {};
  const renderedText = { __html: marked(text) };

  return (
    <Container>
      <CardText dangerouslySetInnerHTML={renderedText} skeleton={skeleton}/>

      <Timeline>
        { events.sort(eventSorter).map((event, index) => renderEvent(event, index === 0, index === events.length - 1)) }
      </Timeline>
    </Container>
  );
}

CardView.propTypes = {
  card: shape({
    text: string
  })
};

export default CardView;