import NewCardForm from '../components/new-card-form';
import React from "react";
import { connect } from 'react-redux';

function newCard({ api, history, match }) {
  const boardId = match.params.id;

  const createCard = async(text, color) => {
    try {
      await api.createCard(boardId, text, color);
      history.push(`/boards/${boardId}`);
    } catch(error) {
      console.log('error', error);
    }
  };

  return (
    <div className="view">
      <NewCardForm createCard={createCard}/>
    </div>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards
});

export default connect(mapStateToProps)(newCard);
