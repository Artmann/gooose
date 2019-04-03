import React, { useState } from 'react';

import FormError from './form-error';
import { Link } from 'react-router-dom';
import LoadingSpinner from './loading-spinner';

export default function SignInForm({ signIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const submit = async event => {
    event.preventDefault();
    setIsSubmitting(true);

    await signIn(email, password);

    setIsSubmitting(false);
  };

  return (
    <form className="small-form" onSubmit={submit}>
      {isSubmitting ? <LoadingSpinner /> : ''}

      <h1 className="small-form__header">
        Welcome Back <span role="img" aria-label="smiley">😊</span>
      </h1>

      <FormError message={errorMessage} />

      <div className="input">
        <label className="input__label">Email</label>
        <input
          autoFocus={true}
          className="input__box"
          data-testid="sign-in-form-email"
          name="email"
          placeholder="tony@company.com"
          required={true}
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div className="input">
        <label className="input__label">Password</label>
        <input
          className="input__box"
          data-testid="sign-in-form-password"
          name="password"
          placeholder="*********"
          required={true}
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="small-form__actions">
        <button className="button button--primary" data-testid="sign-in-form-submit">Sign In</button>
      </div>
      <div className="small-form__links">
        <Link to="/sign-up" className="small-form__link">
          Sign Up
        </Link>
        <Link to="/reset-image" className="small-form__link">
          Reset Password
        </Link>
      </div>
    </form>
  );
}
