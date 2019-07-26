import React, { useEffect, useState } from "react";
import { fetchBoard, fetchCards, moveCard, fetchModel, fetchModels } from '../actions';

import Column from "../components/column.js";
import { Link } from 'react-router-dom'
//@ts-ignore
import Swipe from 'react-easy-swipe';
import { ThemeConsumer } from '../context/theme';
import View from '../components/view';
import { connect } from 'react-redux';
import { isTablet } from "../styled-components/media";
import styled from 'styled-components';
import IBoard from '../data/models/board';
import ICard from '../data/models/card';
import IColumn from '../data/models/column';

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

interface BoardRouteProps {
  boards: IBoard[];
  cards: ICard[];
  dispatch: Function;
  match: any;
};

interface Position {
  x: number;
  y: number;
}

function Board({ boards = [], cards = [], dispatch, match }: BoardRouteProps) {
  const boardId = match.params.id;
  const [columnIndex, setColumnIndex] = useState(0);
  const board = boards.find(b => `${b.id}` === boardId );

  useEffect(() => {
    dispatch(fetchModel<IBoard>('board', boardId));
    dispatch(fetchModels<ICard>('card'));
  }, []);


  if (boards.length === 0 || !board) {
    return <div>Loading...</div>;
  }

  const currentColumn = board.columns[columnIndex];
  const title = isTablet() ? currentColumn.name : board.name;

  let isSwiping = false;
  let startPosition: Position;
  let endPosition: Position;

  const onSwipeStart = () => {
    isSwiping = false;
  };

  const onSwipeMove = (position: Position) => {
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

  const onCardMoved = (column: IColumn, card: ICard, index: number) => {
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
          //@ts-ignore
          <View background={theme.background} title={title} >
              <Columns>
                {board.columns.map((column, key) => (
                  <Column
                    column={column}
                    currentColumn={currentColumn}
                    key={key}
                    cards={cards}
                    //@ts-ignore
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

const mapStateToProps = ({ data }: any) => ({
  boards: data.boards,
  cards: data.cards
});

export default connect(mapStateToProps)(Board);
