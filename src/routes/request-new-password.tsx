import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import RequestNewPasswordForm from '../components/request-new-password-form';
import ViewWithCenteredContent from '../styled-components/view-with-centered-content';

const requestNewPasswordQuery = gql`
  mutation RequestPasswordReset($email: String!) {
    requestPasswordReset(email: $email)
  }
`;

export default function RequestNewPassword({ history }: RouteComponentProps) {
  const [ requestNewPassword, { error, loading } ] = useMutation(requestNewPasswordQuery, {
    onCompleted: ({ requestPasswordReset: email }) => {
      history.push(`/reset-password?email=${ email }`);
    }
  });

  const submitHandler = (email: string) => {
    requestNewPassword({ variables: { email }});
  };

  return (
    <ViewWithCenteredContent>
      <RequestNewPasswordForm
        errorMessage={ error ? error.message : undefined }
        isSubmitting={ loading }
        onSubmit={ submitHandler }
      />
    </ViewWithCenteredContent>
  );
}
