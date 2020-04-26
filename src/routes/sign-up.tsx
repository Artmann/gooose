import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

import SignUpForm from '../components/sign-up-form';
import ViewWithCenteredContent from '../styled-components/view-with-centered-content';
import { RouteComponentProps } from 'react-router-dom';

interface SignUpProps extends RouteComponentProps<any> {}

const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export default function SignUp({ history }: SignUpProps) {
  const [ signUp, { error, loading } ] = useMutation(SIGN_UP);

  const signUpHandler = (email: string, name: string, password: string): void => {
    signUp({
      variables: {
        email,
        password,
        name
      }
    }).then(result => {
      localStorage.setItem('gooose:token', result.data.signUp.token);

      history.push('/boards');
    }).catch((error) => {
      console.error(error);
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
