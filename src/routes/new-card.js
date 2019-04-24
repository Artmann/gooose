import React, { useEffect, useState } from "react";

import NewCardForm from '../components/new-card-form';
import { connect } from 'react-redux';

function newCard({ match }) {
  const boardId = match.params.id;

  return (
    <div className="view">
      <NewCardForm />
    </div>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards
});

export default connect(mapStateToProps)(newCard);
