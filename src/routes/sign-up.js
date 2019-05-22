import React, { useState } from 'react';

import SignUpForm from '../components/sign-up-form';
import View from '../styled-components/view';
import { authorized } from '../actions';
import { connect } from 'react-redux';

function SignUp({ api, dispatch, history }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signUp = async (email, name, password) => {
    try {
      setErrorMessage(null);
      setIsSubmitting(true);

      await api.createUser(email, name, password);

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
      <SignUpForm
        errorMessage={errorMessage}
        isSubmitting={isSubmitting}
        signUp={signUp}   
      />
    </View>
  );
}

export default connect(null)(SignUp);
