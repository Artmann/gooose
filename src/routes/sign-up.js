import React from 'react';
import SignUpForm from '../components/sign-up-form';
import { authorized } from '../actions';
import { connect } from 'react-redux';

function SignUp({ api, dispatch, history }) {
  const signUp = async (email, name, password) => {
    await api.createUser(email, name, password);

    const { token } = await api.createSession(email, password);

    localStorage.setItem('token', token);
    dispatch(authorized());
    history.push('/');
  };

  return (
    <div className="view">
      <SignUpForm signUp={signUp} />
    </div>
  );
}

export default connect(null)(SignUp);
