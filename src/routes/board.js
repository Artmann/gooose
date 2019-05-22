import React, { useEffect, useState } from "react";
import { fetchBoard, fetchCards, moveCard } from '../actions';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Column from "../components/column.js";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const query = gql`
  board(id: ${ props => props.id }) {
    id,
    name
  }
`;

function wrap(content) {
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return content;
    }}
    </Query>
  );
}

function Board({ boards, cards, dispatch, match }) {
  const boardId = match.params.id;
  const [columnIndex, setColumnIndex] = useState(0);

  /**
  useEffect(() => {
    dispatch(fetchBoard(boardId));
    dispatch(fetchCards());
  }, []);
  */

  if (boards.length === 0) {
    return <div>Loading...</div>;
  }

  const board = boards.find(b => `${b.id}` === boardId );

  const currentColumn = board.columns[columnIndex];

  const decreaseIndex = () => {
    const index = Math.max(0, columnIndex - 1);

    setColumnIndex(index);
  };

  const increaseIndex = () => {
    const index = Math.min(columnIndex + 1, board.columns.length - 1);

    setColumnIndex(index);
  };

  const onCardMoved = (column, card, index) => {
    dispatch(moveCard(column, card, index));
  };

  return (
    <div className="board">
      <div className="board__column-selection">
        <i className="fas fa-caret-left" onClick={decreaseIndex}></i>
        <p>{currentColumn.name}</p>
        <i className="fas fa-caret-right" onClick={increaseIndex}></i>
      </div>
      <div className="columns">
        {board.columns.map((column, key) => (
          <Column
            column={column}
            currentColumn={currentColumn}
            key={key}
            cards={cards}
            onCardMoved={onCardMoved}
          />
        ))}
      </div>

      <Link to={ `/boards/${board.id}/cards/new` } className="add-card-button">
        <i className="fas fa-plus"></i>
      </Link>
    </div>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards,
  cards: data.cards
});

export default connect(mapStateToProps)(Board);
