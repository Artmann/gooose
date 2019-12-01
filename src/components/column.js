import { Droppable } from 'react-beautiful-dnd';

import Card from './card';
import React from 'react';
import { ThemeConsumer } from '../context/theme';
import media from '../styled-components/media';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  align-items: center;
  border-right: solid 1px ${ props => props.borderColor };
  display: ${ props => props.isCurrent ? 'flex' : 'none' };
  flex-direction: column;
  min-height: 100vh;
  padding: 3rem 2rem;

  &:last-child {
    border: none;
  }

  ${media.desktop`
    display: flex;
    flex: 1;
    max-width: 20rem;
    padding: 2rem 3rem;
  `}
`;

const Name = styled.div`
  color: ${ props => props.color }
  display: none;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.07rem;
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  ${media.desktop` display: block; `}
`;

function Column({ board, cards, column, currentColumn, onCardMoved = () => {} }) {
  const isCurrent = column.id === currentColumn.id;
  const myCards = cards.sort((a, b) => a.order - b.order);

  return (
    <Droppable droppableId={ column.id }>
      {(provided, snapshot) => (
        <ThemeConsumer>
          {theme =>
            <ColumnContainer
              borderColor={theme.borderColor}
              isCurrent={isCurrent}
              ref={provided.innerRef}
              >
              <Name color={theme.headerColor}>{column.name}</Name>

              {
                myCards.map((card, key) => (
                  <Card board={board} card={card} key={key} index={key} />
                ))
              }
            </ColumnContainer>
          }
        </ThemeConsumer>
      )}
    </Droppable>
  );
}

export default Column;
