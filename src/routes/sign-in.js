import React, { useState } from 'react';

import SignInForm from '../components/sign-in-form';
import ViewWithCenteredContent from '../styled-components/view-with-centered-content';
import { authorized } from '../actions';
import { connect } from 'react-redux';

function SignIn({ api, dispatch, history }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signIn = async (email, password) => {
    try {
      setErrorMessage(null);
      setIsSubmitting(true);

      const { token } = await api.createSession(email, password);

      localStorage.setItem('token', token);
      dispatch(authorized());
      setIsSubmitting(false);
      history.push('/boards');
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error.toString());
    }
  };

  return (
    <ViewWithCenteredContent>
      <SignInForm
        errorMessage={errorMessage}
        isSubmitting={isSubmitting}
        signIn={signIn}
      />
    </ViewWithCenteredContent>
  );
}

export default connect(null)(SignIn);
