import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ResetPasswordForm from '../components/reset-password-form';
import ViewWithCenteredContent from '../styled-components/view-with-centered-content';

const resetPasswordQuery = gql`
  mutation ResetPassword($email: String!, $code: String!, $password: String!) {
    resetPassword(email: $email, code: $code, password: $password)
  }
`;

export default function ResetPassword({ history }: RouteComponentProps) {
  const email = new URLSearchParams(window.location.search).get('email');

  const [ resetPassword, { error, loading } ] = useMutation(resetPasswordQuery, {
    onCompleted: () => {
      history.push(`/sign-in`);
    }
  });

  const submitHandler = (code: string, password: string) => {
    resetPassword({ variables: { email, code, password } });
  };

  return (
    <ViewWithCenteredContent>
      <ResetPasswordForm
        errorMessage={ error ? error.message : undefined }
        isSubmitting={ loading }
        onSubmit={ submitHandler }
      />
    </ViewWithCenteredContent>
  );
}
