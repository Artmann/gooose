import React, { useState } from 'react';

import ColorSelection from './color-selection';
import { CtaButton } from '../styled-components/buttons';
import FormError from "./form-error";
import { Label } from './text-input';
import LoadingSpinner from "./loading-spinner";
import PropTypes from 'prop-types';
import TextEditor from './text-editor';
import media from '../styled-components/media';
import styled from 'styled-components';

const Box = styled.div`
  margin: 2.5rem 0;
`;
const BigForm = styled.form`
  margin: 0 auto;
  max-width: 48rem;
  width: 100%;
`;
const BigFormHeader = styled.div`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  ${media.tablet`
    margin-bottom: 3rem;
  `}
`;

export default function NewCardForm({ createCard, errorMessage = null, isSubmitting = false }) {
  const [text, setText] = useState('As a Product Owner, I can add new stories for the team.');
  const [color, setColor] = useState('#eb5286');

  const onSubmit = e => {
    e.preventDefault();
    createCard(text, color);
  };

  return (
    <BigForm onSubmit={onSubmit}>

      {isSubmitting ? <LoadingSpinner /> : ""}

      <BigFormHeader>
        Add a New Card
      </BigFormHeader>

      <FormError message={errorMessage} />

      <Box>
        <Label>Text</Label>
        <TextEditor text={ text } onChange={ t => setText(t) } />
      </Box>

      <Box>
        <Label>Color</Label>
        <ColorSelection color={color} onChange={ c => setColor(c) }/>
      </Box>

      <Box>
        <CtaButton data-test-create-card-button="true">
          Create Card
        </CtaButton>
      </Box>
    </BigForm>
  );
}

NewCardForm.propTypes = {
  createCard: PropTypes.func.isRequired,

  errorMessage: PropTypes.string,
  isSubmitting: PropTypes.bool
};
