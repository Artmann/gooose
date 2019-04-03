import React, { useState } from "react";

import FormError from "./form-error";
import LoadingSpinner from "./loading-spinner";
import PasswordStrengthIndicator from "./password-strength-indicator";

export default function SignUpForm({ signUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const submit = async event => {
    event.preventDefault();

    setIsSubmitting(true);
    try {
      await signUp(email, name, password);
    } catch ({ messages }) {
      const message =
        messages && messages.length > 0
          ? messages[0]
          : "Unkown error. Please try again.";

      setErrorMessage(message);
    }
    setIsSubmitting(false);
  };

  return (
    <form className="small-form" onSubmit={submit}>
      {isSubmitting ? <LoadingSpinner /> : ""}

      <h1 className="small-form__header">Create your account</h1>

      <FormError message={errorMessage} />

      <div className="input">
        <label className="input__label">Name</label>
        <input
          autoFocus={true}
          className="input__box"
          name="name"
          placeholder="John Smith"
          required={true}
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div className="input">
        <label className="input__label">Email</label>
        <input
          className="input__box"
          name="email"
          placeholder="john.smith@company.com"
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
          name="password"
          placeholder="****************"
          required={true}
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <PasswordStrengthIndicator password={password} />
      </div>
      <div className="small-form-actions">
        <button className="button button--primary" data-test-sign-in-button="true">Sign Up</button>
      </div>
    </form>
  );
}
