import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Swipe from 'react-easy-swipe';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Column from '../components/column.js';
import View from '../components/view';
import { ThemeConsumer } from '../context/theme';
import { isTablet } from '../styled-components/media';

const AddCardButton = styled(Link)`
  background: #15cd72;
  bottom: 1rem;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
  padding: 1rem;
  position: fixed;
  right: 1rem;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
`;

export default function Columns({ board, onCardMoved }) {
  const [columnIndex, setColumnIndex] = useState(0);

  if (!board) {
    return null;
  }

  const currentColumn = board.columns[columnIndex];
  const title = isTablet() ? currentColumn.name : board.name;

  let isSwiping = false;
  let startPosition, endPosition;

  const onSwipeStart = () => {
    isSwiping = false;
  };

  const onSwipeMove = position => {
    if (isSwiping) {
      endPosition = position;
    } else {
      startPosition = position;
    }

    isSwiping = true;
  };

  const onSwipeEnd = () => {
    const diff = startPosition.x - endPosition.x;

    const index = diff > 0 ?
      Math.min(columnIndex + 1, board.columns.length - 1) :
      Math.max(0, columnIndex - 1);

    if (Math.abs(diff) > 50) {
      setColumnIndex(index);
    }
  };

  const onDragEnd = ({ destination, source }) => {
    console.log('dragEnd', source, destination);
    // const card = myCards[source.index];

    // if (!destination) {
    //   return;
    // }

    // onCardMoved(column, card, destination.index);
  };

  return (
    <Swipe
      onSwipeStart={ onSwipeStart }
      onSwipeMove={ onSwipeMove }
      onSwipeEnd={ onSwipeEnd }
      >
      <ThemeConsumer>
        {theme =>
          <View background={ theme.background } title={ title } >
            <DragDropContext onDragEnd={onDragEnd}>
              <Container>
                {board.columns.map(column => (
                  <Column
                    board={ board }
                    column={ column }
                    currentColumn={ currentColumn }
                    key={ column.id }
                    cards={ column.cards }
                    onCardMoved={ onCardMoved }
                  />
                ))}
              </Container>
            </DragDropContext>
              <AddCardButton to={ `/boards/${board.id}/cards/new` }>
                <i className="fas fa-plus"></i>
              </AddCardButton>
          </View>
        }
      </ThemeConsumer>
    </Swipe>
  );
}
