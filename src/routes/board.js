import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';

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
  const [board, setBoard] = useState(null);

  const { loading } = useQuery(boardQuery, {
    fetchPolicy: 'no-cache',
    // pollInterval: 1500,
    variables: {
      id: boardId
    },
    onCompleted: data => {
      setBoard(data.board);
    }
  });

  if (loading || !board) {
    return <LoadingSpinner />;
  }

  console.log(board);

  const onCardMoved = (column, card, index) => {
    console.log('MOVE CARD', column, card, index);
  };

  return (
    <Columns board={ board } onCardMoved={ onCardMoved } />
  );
}
