import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchBoards } from '../actions';

function Boards({ boards, dispatch, history }) {
  useEffect(() => {
    dispatch(fetchBoards());
  });

  if (boards.length > 0) {
    history.push(`/boards/${boards[0].id}`);
  }

  return <div className="view">No boards yet { boards.length }</div>
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards
});

export default connect(mapStateToProps)(Boards);
