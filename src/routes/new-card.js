import React, { useEffect, useState } from "react";

import { connect } from 'react-redux';

function newCard({ match }) {
  const boardId = match.params.id;

  return (
    <div className="">
      Hello World
    </div>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards
});

export default connect(mapStateToProps)(newCard);
