import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

import SignUpForm from '../components/sign-up-form';
import ViewWithCenteredContent from '../styled-components/view-with-centered-content';

const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name) {
      email
    }
  }
`;

export default function SignUp({ history }) {
  const [ signUp, { error, loading } ] = useMutation(SIGN_UP, {
    onCompleted: () => history.push('/sign-in')
  });

  const signUpHandler = (email, name, password) => {
    signUp({
      variables: {
        email,
        password,
        name
      }
    });
  };

  return (
    <ViewWithCenteredContent>
      <SignUpForm
        errorMessage={ error ? error.message : null }
        isSubmitting={ loading }
        signUp={ signUpHandler }
      />
    </ViewWithCenteredContent>
  );
}
