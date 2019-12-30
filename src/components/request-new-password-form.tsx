import React, { useState, FormEvent } from 'react';

import { SmallForm, SmallFormHeader, SmallFormActions } from '../styled-components/small-form';
import FormError from './form-error';
import LoadingSpinner from './loading-spinner';
import TextInput from './design/text-input';
import { CtaButton } from '../styled-components/buttons';

interface RequestNewPasswordFormProps {
  isSubmitting: boolean;
  onSubmit: (email: string) => void;

  errorMessage
  ?: string;
};

export default function RequestNewPasswordForm({ isSubmitting, onSubmit, errorMessage }: RequestNewPasswordFormProps) {
  const [email, setEmail] = useState('');

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(email);
  };

  return (
    <SmallForm onSubmit={ submitHandler }>

      {isSubmitting ? <LoadingSpinner /> : ''}

      <SmallFormHeader>
        Reset your password.
      </SmallFormHeader>

      <FormError message={ errorMessage
       } />

      <TextInput
        label='Email'
        name='email'
        placeholder='john.smith@company.com'
        required={ true }
        type='email'
        value={ email }
        onChange={ (event: FormEvent<HTMLInputElement>) => setEmail(event.currentTarget.value) }
      />

      <SmallFormActions>
        <CtaButton data-test-reset-password-button='true'>
          Reset password
        </CtaButton>
      </SmallFormActions>
    </SmallForm>
  );
}
