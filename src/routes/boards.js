import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

import LoadingSpinner from '../components/loading-spinner';

const boardsQuery = gql`
  {
    boards {
      id
    }
  }
`;

export default function Boards({ history }) {
  const { loading, data } = useQuery(boardsQuery);

  if (!loading) {
    if (data && data.boards && data.boards.length > 0) {
      history.push(`/boards/${ data.boards[0].id }`);
    }
  }

  return (
    <div className="view">
      <LoadingSpinner />
    </div>
   );
}
