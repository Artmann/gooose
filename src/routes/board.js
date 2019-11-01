import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Column from '../components/column.js';
import View from '../components/view';
import { ThemeConsumer } from '../context/theme';
import { isTablet } from '../styled-components/media';
import LoadingSpinner from '../components/loading-spinner';

const Columns = styled.div`
  display: flex;
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

const boardQuery = gql`
  query getBoard($id: ID!) {
    board(id: $id) {
      id
      name
      columns {
        id
        name
        cards {
          id
          text
        }
      }
    }
  }
`;

export default function Board({ match }) {
  const boardId = match.params.id;
  const [columnIndex, setColumnIndex] = useState(0);

  const { loading, error, data } = useQuery(boardQuery, { variables: { id: boardId } });

  if (loading) {
    return <LoadingSpinner />;
  }

  const { board } = data;
  const currentColumn = board.columns[columnIndex];
  const title = isTablet() ? currentColumn.name : board.name;

  console.log(board);

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

  const onCardMoved = (column, card, index) => {
    //dispatch(moveCard(column, card, index));
    console.log('MOVE CARD', column, card, index);
  };

  return (
    <Swipe
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      >
      <ThemeConsumer>
        {theme =>
          <View background={theme.background} title={title} >
              <Columns>
                {board.columns.map((column, key) => (
                  <Column
                    column={column}
                    currentColumn={currentColumn}
                    key={key}
                    cards={column.cards}
                    onCardMoved={onCardMoved}
                  />
                ))}
              </Columns>

              <AddCardButton to={ `/boards/${board.id}/cards/new` }>
                <i className="fas fa-plus"></i>
              </AddCardButton>
          </View>
        }
      </ThemeConsumer>
    </Swipe>
  );
}
