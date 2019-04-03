import React from 'react';
import SignInForm from '../components/sign-in-form';

export default function SignIn({ api, history }) {
  const signIn = async (email, password) => {
    const { token } = await api.createSession(email, password);

    localStorage.setItem('token', token);
    history.push('/boards');
  };

  return (
    <div className="view">
      <SignInForm signIn={signIn} />
    </div>
  );
}
