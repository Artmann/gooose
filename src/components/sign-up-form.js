import React, { useState } from "react";
import { SmallForm, SmallFormActions, SmallFormHeader } from '../styled-components/small-form';

import { CtaButton } from '../styled-components/buttons';
import FormError from "./form-error";
import LoadingSpinner from "./loading-spinner";
import PasswordStrengthIndicator from "./password-strength-indicator";
import PropTypes from 'prop-types';
import TextInput from './design/text-input';

function SignUpForm({ errorMessage = null, isSubmitting = false, signUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = event => {
    event.preventDefault();
    signUp(email, name, password);
  };

  return (
    <SmallForm onSubmit={onSubmit}>
      {isSubmitting ? <LoadingSpinner /> : ""}

      <SmallFormHeader>Create Your Account</SmallFormHeader>

      <FormError message={errorMessage} />

      <TextInput
        autoFocus={true}
        label="Name"
        name="name"
        placeholder="John Smith"
        required={true}
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <TextInput
        label="Email"
        name="email"
        placeholder="john.smith@company.com"
        required={ true }
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

      <PasswordStrengthIndicator password={password} />

      <SmallFormActions>
        <CtaButton data-test-sign-in-button="true">
          Sign Up
        </CtaButton>
      </SmallFormActions>

    </SmallForm>
  );
}

SignUpForm.propTypes = {
  signUp: PropTypes.func.isRequired,

  errorMessage: PropTypes.string,
  isSubmitting: PropTypes.bool
};

export default SignUpForm;
