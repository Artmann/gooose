import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

import NewCardForm from '../components/new-card-form';
import View from '../styled-components/view';

const createCardQuery = gql`
  mutation CreateCard(
    $boardId: ID!
    $summary: String!
    $text: String
    $blocked: Boolean
    $color: String
    $timebox: Int
  ) {
    createCard(boardId: $boardId, summary: $summary, text: $text, blocked: $blocked, color: $color, timebox: $timebox) {
      id
      blocked
      color
      key
      order
      timebox
      summary
      text
    }
  }
`;


export default function newCard({ history, match }) {
  const boardId = match.params.id;

  const [ createCard, { error, loading } ] = useMutation(createCardQuery, {
    onCompleted: (data) => {
      history.push(`/boards/${boardId}`);
    }
  });

  const createCardHandler = (summary, text, color) => {
    createCard({ variables: { boardId, summary, text, color } });
  };

  return (
    <View>
      <NewCardForm
        createCard={ createCardHandler }
        errorMessage={ error ? error.message : null }
        isSubmitting={ loading }
        />
    </View>
  );
}
