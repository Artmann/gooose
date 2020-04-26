import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

import SignInForm from '../components/sign-in-form';
import ViewWithCenteredContent from '../styled-components/view-with-centered-content';

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

export default function SignIn({ history }) {
  const [ signIn, { error, loading } ] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: { token }}) => {
      localStorage.setItem('gooose:token', token);

      history.push('/boards');
    }
  });

  const signInHandler = (email, password) => {
    signIn({ variables: { email, password } });
  };

  return (
    <ViewWithCenteredContent>
      <SignInForm
        errorMessage={ error ? error.message : null }
        isSubmitting={ loading }
        signIn={ signInHandler }
      />
    </ViewWithCenteredContent>
  );
}
