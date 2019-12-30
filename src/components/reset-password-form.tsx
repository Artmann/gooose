import React, { useState, FormEvent } from 'react';

import { SmallForm, SmallFormHeader, SmallFormActions } from '../styled-components/small-form';
import FormError from './form-error';
import LoadingSpinner from './loading-spinner';
import TextInput from './design/text-input';
import { CtaButton } from '../styled-components/buttons';

interface ResetPasswordFormProps {
  isSubmitting: boolean;
  onSubmit: (code: string, password: string) => void;

  errorMessage?: string;
};

export default function ResetPasswordForm({ isSubmitting, onSubmit, errorMessage }: ResetPasswordFormProps) {
  const [ code, setCode ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
  const [ inputError, setInputError ] = useState('');

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setInputError(`Passwords doesn't match`);
      return;
    } else {
      setInputError('');
    }

    onSubmit(code, password);
  };

  return (
    <SmallForm onSubmit={ submitHandler }>

      {isSubmitting ? <LoadingSpinner /> : ''}

      <SmallFormHeader>
        Enter your new password.
      </SmallFormHeader>

      <FormError message={ inputError || errorMessage } />

      <TextInput
        autoFocus={ true }
        label='Code'
        name='code'
        placeholder='123-456-789'
        required={ true }
        type='text'
        value={ code }
        onChange={ (event: FormEvent<HTMLInputElement>) => setCode(event.currentTarget.value) }
      />

      <TextInput
        label='New password'
        name='password'
        required={ true }
        type='password'
        value={ password }
        onChange={ (event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value) }
      />

      <TextInput
        label='Confirm password'
        name='confirm-password'
        required={ true }
        type='password'
        value={ passwordConfirmation }
        onChange={ (event: FormEvent<HTMLInputElement>) => setPasswordConfirmation(event.currentTarget.value) }
      />

      <SmallFormActions>
        <CtaButton data-test-reset-password-button='true'>
          Reset password
        </CtaButton>
      </SmallFormActions>
    </SmallForm>
  );
}
