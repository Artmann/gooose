import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';

import Columns from '../../components/columns';
import LoadingSpinner from '../../components/loading-spinner';
import reducer from './reducer';

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
          boardId
          blocked
          color
          columnId
          key
          order
          timebox
          text
        }
      }
    }
  }
`;

const moveCardQuery = gql`
  mutation MoveCard($id: String!, $order: Float!, $columnId: String!, $boardId: String!) {
    moveCard(id: $id, order: $order, columnId: $columnId, boardId: $boardId) {
      id,
      order,
      columnId
    }
  }
`;

export default function Board({ match }) {
  const boardId = match.params.id;
  const [board, setBoard] = useState(null);

  const { loading } = useQuery(boardQuery, {
    fetchPolicy: 'no-cache',
    pollInterval: 600,
    variables: {
      id: boardId
    },
    onCompleted: data => {
      setBoard(data.board);
    }
  });
  const [ moveCard ] = useMutation(moveCardQuery);

  if (loading || !board) {
    return <LoadingSpinner />;
  }

  const onCardMoved = (origin, destination) => {
    const [ updatedBoard, changes ] = reducer.moveCard(board, origin, destination);

    moveCard({ variables: { id: changes.id, order: changes.order, columnId: changes.columnId, boardId } });
    setBoard(updatedBoard);
  };

  return (
    <Columns board={ board } onCardMoved={ onCardMoved } />
  );
}
