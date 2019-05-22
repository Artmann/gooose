import React, { useEffect, useState } from "react";
import { fetchBoard, fetchCards, moveCard } from '../actions';

import Column from "../components/column.js";
import { Link } from 'react-router-dom'
import Swipe from 'react-easy-swipe';
import { ThemeConsumer } from '../context/theme';
import View from '../components/view';
import { connect } from 'react-redux';
import { isTablet } from "../styled-components/media";
import styled from 'styled-components';

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

function Board({ boards, cards, dispatch, match }) {
  const boardId = match.params.id;
  const [columnIndex, setColumnIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchBoard(boardId));
    dispatch(fetchCards());
  }, []);

  if (boards.length === 0) {
    return <div>Loading...</div>;
  }

  const board = boards.find(b => `${b.id}` === boardId );
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

  const onCardMoved = (column, card, index) => {
    dispatch(moveCard(column, card, index));
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
                    cards={cards}
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

const mapStateToProps = ({ data }) => ({
  boards: data.boards,
  cards: data.cards
});

export default connect(mapStateToProps)(Board);
