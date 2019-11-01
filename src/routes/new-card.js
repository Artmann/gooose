import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

import NewCardForm from '../components/new-card-form';
import View from '../styled-components/view';

const createCardQuery = gql`
  mutation CreateCard(
    $boardId: ID!
    $text: String!
    $blocked: Boolean
    $color: String
    $timebox: Int
  ) {
    createCard(boardId: $boardId, text: $text, blocked: $blocked, color: $color, timebox: $timebox) {
      id
      blocked
      color
      key
      order
      timebox
      text
    }
  }
`;


export default function newCard({ history, match }) {
  const boardId = match.params.id;

  const [ createCard, { error, loading } ] = useMutation(createCardQuery, {
    onCompleted: (data) => {
      console.log(data);

      history.push(`/boards/${boardId}`);
    }
  });

  const createCardHandler = (text, color) => {
    createCard({ variables: { boardId, text, color } });
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
