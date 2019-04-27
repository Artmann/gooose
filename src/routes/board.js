import React, { useEffect, useState } from "react";
import { fetchBoard, fetchCards } from '../actions';

import Column from "../components/column.js";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

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

  const decreaseIndex = () => {
    const index = Math.max(0, columnIndex - 1);

    setColumnIndex(index);
  };

  const increaseIndex = () => {
    const index = Math.min(columnIndex + 1, board.columns.length - 1);

    setColumnIndex(index);
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
