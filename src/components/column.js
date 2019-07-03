import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React, { forwardRef } from 'react';

import Card from './card';
import { ThemeConsumer } from '../context/theme';
import media from '../styled-components/media';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  align-items: center;
  background: ${ props => props.color };
  border-right: solid 1px ${ props => props.borderColor };
  display: flex;
  flex-direction: column;
  height: 100%;
  left: ${ props => props.number * window.outerWidth }px;
  min-height: 100vh;
  padding: 1.5rem 0;
  position: absolute;
  top: 0px;
 // transform: translate(${ props => props.number * window.outerWidth }px, 0);
  width: ${ window.outerWidth }px;

  &:last-child {
    border: none;
  }

  ${media.desktop`
    flex: 1;
    max-width: 24rem;
    padding-top: 2rem;
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

function Column({ cards, column, currentColumn, number, onCardMoved = () => {} }, ref) {
  const colors = ['red', 'green', 'blue'];
  const isCurrent = column.id === currentColumn.id;
  const myCards = cards
    .filter(card => card.columnId === column.id)
    .sort((a, b) => a.order - b.order);

  const onDragEnd = ({ destination, source }) => {
    const card = myCards[source.index];

    if (!destination) {
      return;
    }

    onCardMoved(column, card, destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <ThemeConsumer>
            {theme =>
              <ColumnContainer
                color={colors[number]}
                borderColor={theme.borderColor}
                isCurrent={isCurrent}
                number={number}
                ref={element => {
                  provided.innerRef(element);
                  ref.current = element;
                }}
                >
                <Name color={theme.headerColor}>{column.name}</Name>

                {
                  myCards.map((card, key) => (
                    <Card card={card} key={key} index={key} />
                  ))
                }
              </ColumnContainer>
            }
          </ThemeConsumer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default forwardRef(Column);
