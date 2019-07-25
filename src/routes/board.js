import React, { useEffect, useState } from "react";
import { fetchBoard, fetchCards, moveCard } from '../actions';

import Columns from '../components/columns';
import View from '../components/view';
import { connect } from 'react-redux';
import { isTablet } from "../styled-components/media";

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

  return (
    <View title={title} >
      <Columns columns={ board.columns } />
    </View>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards,
  cards: data.cards
});

export default connect(mapStateToProps)(Board);
