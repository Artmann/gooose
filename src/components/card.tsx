import React from 'react';
import styled from 'styled-components';

import { ThemeConsumer } from '../context/theme';
import { boxShadow } from '../styled-components/shadows';

interface CardContainerProps {
  background: string;
  borderColor: string;
  color: string;
}

interface DragOptions {
  innerRef?: any;
  draggableProps: object;
  dragHandleProps: object;
}

interface Card {
  id: string;
  boardId: string;
  blocked: boolean;
  color: string;
  columnId: string;
  key: string;
  order: number;
  summary: string;
  text: string;

  timebox?: number;
}

interface CardProps {
  card: Card;

  disableLink?: boolean;
  draggable?: DragOptions;
}

const CardContainer = styled.a<CardContainerProps>`
  ${boxShadow}
  background: ${ props => props.background };
  border: solid 1px ${ props => props.borderColor }
  color: ${ props => props.color };
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  max-width: 22rem;
  padding: 1rem 0.25rem;
  position: relative;
  text-decoration: none;
  width: 100%;
`;
const CardColorMarker = styled.div`
  background: ${ props => props.color };
  height: 2.5rem;
  left: 0;
  margin-bottom: 1rem;
  position: absolute;
  top: 1.5rem;
  width: 0.25rem;
`;
const CardText = styled.div`
  flex: 1;
  line-height: 1.75;
  font-size: 1.0rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1.25rem;

  p { margin: 0; }
`;
const Key = styled.div`
  color: ${ props => props.color };
  font-size: 0.75rem;
  letter-spacing: 0.04rem;
  padding: 0.25rem 1.25rem;
  text-transform: uppercase;
`;

const defaultDragOptions = {
  innerRef: null,
  draggableProps: {},
  dragHandleProps: {}
};

export default function Card({ card, disableLink = false, draggable = defaultDragOptions }: CardProps) {
  const { boardId, color, key, summary } = card;

  return (
    <ThemeConsumer>
      {theme =>
        <CardContainer
          background = { theme.containerBackground }
          borderColor = { theme.borderColor }
          color = { theme.textColor }
          href = { disableLink ? '' : `/boards/${boardId}/cards/${card.key}` }
          ref = { draggable.innerRef }
          { ...draggable.draggableProps }
          { ...draggable.dragHandleProps }
          data-testid="card-link"
          >
          <CardColorMarker color={ color } />
          <CardText data-testid="card-text" >
            { summary }
          </CardText>
          <Key color={ theme.secondaryTextColor } data-testid="card-key">
            { key }
          </Key>
        </CardContainer>
      }
    </ThemeConsumer>
  );
}
