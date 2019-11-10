import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

import Columns from '../components/columns';
import LoadingSpinner from '../components/loading-spinner';

const boardQuery = gql`
  query getBoard($id: ID!) {
    board(id: $id) {
      id
      name
      columns {
        id
        name
        cards {
          id
          blocked
          color
          key
          order
          timebox
          text
        }
      }
    }
  }
`;

export default function Board({ match }) {
  const boardId = match.params.id;

const { loading, error, data } = useQuery(boardQuery, {
    pollInterval: 1500,
    variables: {
      id: boardId
    }
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  const { board } = data;

  console.log(board);

  const onCardMoved = (column, card, index) => {
    console.log('MOVE CARD', column, card, index);
  };

  return (
    <Columns board={ board } onCardMoved={ onCardMoved } />
  );
}
