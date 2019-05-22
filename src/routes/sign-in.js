import React, { useState } from 'react';

import SignInForm from '../components/sign-in-form';
import View from '../styled-components/view';
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
    <View>
      <SignInForm 
        errorMessage={errorMessage}
        isSubmitting={isSubmitting}
        signIn={signIn}
      />
    </View>
  );
}

export default connect(null)(SignIn);