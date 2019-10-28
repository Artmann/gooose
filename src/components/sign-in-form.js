import React, { useState } from 'react';
import { SmallForm, SmallFormActions, SmallFormHeader, SmallFormLink, SmallFormLinks } from '../styled-components/small-form';

import { CtaButton } from '../styled-components/buttons';
import FormError from "./form-error";
import LoadingSpinner from "./loading-spinner";
import PropTypes from 'prop-types';
import TextInput from '../components/text-input';

function SignInForm({ errorMessage = null, isSubmitting = false, signIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    signIn(email, password);
  };

  return (
    <SmallForm onSubmit={onSubmit}>

      {isSubmitting ? <LoadingSpinner /> : ""}

      <SmallFormHeader>
        Welcome Back <span role="img" aria-label="smiley">😊</span>
      </SmallFormHeader>

      <FormError message={errorMessage} />

      <TextInput
        label="Email"
        name="email"
        placeholder="john.smith@company.com"
        required={true}
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <TextInput
        label="Password"
        name="password"
        placeholder="****************"
        required={true}
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <SmallFormActions>
        <CtaButton data-test-sign-in-button="true">
          Sign In
        </CtaButton>
      </SmallFormActions>

      <SmallFormLinks>
        <SmallFormLink to="/sign-up">
          Sign Up
        </SmallFormLink>
        <SmallFormLink to="/reset-password">
          Reset Password
        </SmallFormLink>
      </SmallFormLinks>
    </SmallForm>
  );
}

SignInForm.propTypes = {
  signIn: PropTypes.func.isRequired,

  errorMessage: PropTypes.string,
  isSubmitting: PropTypes.bool
};

export default SignInForm;
