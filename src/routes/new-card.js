import React, { useState } from "react";

import NewCardForm from '../components/new-card-form';
import View from '../styled-components/view';
import { connect } from 'react-redux';

function newCard({ api, history, match }) {
  const boardId = match.params.id;

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createCard = async(text, color) => {
    try {
      setErrorMessage(null);
      setIsSubmitting(true);

      await api.createCard(boardId, text, color);
      
      setIsSubmitting(false);
      history.push(`/boards/${boardId}`);
    } catch(error) {
      setIsSubmitting(false);
      setErrorMessage(error.toString());
    }
  };

  return (
    <View>
      <NewCardForm 
        createCard={createCard}
        errorMessage={errorMessage}
        isSubmitting={isSubmitting}
        />
    </View>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards
});

export default connect(mapStateToProps)(newCard);
