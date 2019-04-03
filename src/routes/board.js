import React, { useEffect, useState } from "react";

import Column from "../components/column.js";
import { connect } from 'react-redux';
import { fetchBoard } from '../actions';

function Board({ boards, dispatch, match }) {
  const boardId = match.params.id;

  useEffect(() => {
    dispatch(fetchBoard(boardId));
  });

  if (boards.length === 0) {
    return <div>Loading...</div>
  }

  const board = boards.find(b => `${b.id}` === boardId );

  const cards = [
    {
      id: 1,
      title: `As a player`,
      columnId: 16,
      color: 'purple',
      key: 'cool-leaf-4169',
      order: 0,
    },
    {
      id: 4,
      title: `As a power user, I can specify files or folders to backup based on file size, date created and date modified.`,
      columnId: 17,
      color: 'purple',
      key: 'weathered-glade-4271',
      order: 0,
    },
    {
      id: 2,
      title: `As a user, I can indicate folders not to backup so that my backup drive isn't filled up with things I don't need saved.`,
      columnId: 17,
      color: 'yellow',
      key: 'frosty-field-9283',
      order: 1 ,
    }
  ];

  const [columnIndex, setColumnIndex] = useState(2);
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
    </div>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards
});

export default connect(mapStateToProps)(Board);
