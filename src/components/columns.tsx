import { Link } from 'react-router-dom'
import React from 'react';
import Swipe from 'react-easy-swipe';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

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

interface ColumnProps {
  columns: Column[];
};

export default function Columns({ columns } : ColumnProps) {
  let isSwiping = false;
  let startPosition: number;
  let endPosition: number;

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

  const onCardMoved = (column, card, index) => {
    dispatch(moveCard(column, card, index));
  };
  
  return (
    <Swipe
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      >
      <Container>
        {board.columns.map((column, key) => (
        <Column
          column={column}
          currentColumn={currentColumn}
          key={key}
          cards={cards}
          onCardMoved={onCardMoved}
        />
        ))}
      </Container>

      <AddCardButton to={ `/boards/${board.id}/cards/new` }>
        <i className="fas fa-<plus"></i>
      </AddCardButton>
    </Swipe>
  );
};
