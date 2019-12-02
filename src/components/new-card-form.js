import marked from 'marked';
import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './card';
import ColorSelection from './color-selection';
import FormGroup from './design/form-group';
import FormGroupMain from './design/form-group-main';
import FormGroupExtra from './design/form-group-extra';
import Label from './design/label';
import FormError from './form-error';
import LoadingSpinner from "./loading-spinner";
import PropTypes from 'prop-types';
import { CtaButton } from '../styled-components/buttons';
import media from '../styled-components/media';
import TextArea from './design/text-area';

const Box = styled.div`
  margin: 2.5rem 0;
`;
const BigForm = styled.form`
  margin: 0 auto;
  max-width: 68rem;
  width: 100%;
`;
const BigFormHeader = styled.h1`
  color: ${ props => props.theme.headerColor };
  font-weight: 300;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-transform: uppercase;

  ${media.tablet`
    margin-bottom: 3rem;
  `}
`;

const TextPreview = styled.div`
  color: ${ props => props.theme.textColor };
  max-height: 90%;
  text-preview: 1.65;

  h1 { font-size: 1.25rem; }
  h2 { font-size: 1.12rem; }
  h3, h4, h5 { font-size: 1rem; }
  img { height: auto; max-width: 100%; }
`;

export default function NewCardForm({ createCard, errorMessage = null, isSubmitting = false }) {
  const [ summary, setSummary ] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('#eb5286');

  const onSubmit = e => {
    e.preventDefault();
    createCard(summary, text, color);
  };

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  const placeholder = 'As a Product Owner, I can add new stories for the team.';

  return (
    <BigForm onSubmit={onSubmit}>
      <BigFormHeader>
        Create new Card
      </BigFormHeader>

      <FormError message={errorMessage} />

      <FormGroup toggle={ true } style={{ height: '14rem' }}>
        <FormGroupMain>
          <Label>
            Summary
          </Label>
          <TextArea
            autoFocus = { true }
            placeholder = { placeholder }
            rows = { 3 }
            value = { summary }
            onChange = { value => setSummary(value) }
            />
        </FormGroupMain>
        <FormGroupExtra style={{ display: 'flex', justifyContent: 'center' }} >
          <Card
            card = {{
              id: '1',
              color: '#2779bd',
              key: 'wild-water-3382',
              summary: summary || placeholder
            }}
            disableLink = { true }
            />
        </FormGroupExtra>
      </FormGroup>

      <FormGroup toggle={ true } style={{ height: '25rem' }}>
        <FormGroupMain>
          <Label>
            More Details
          </Label>
          <TextArea
            placeholder = 'Provide a more in detail description'
            rows = { 15 }
            value = { text }
            onChange = { value => setText(value) }
            style={{ maxHeight: '80%' }}
            />
        </FormGroupMain>
        <FormGroupExtra>
          <TextPreview dangerouslySetInnerHTML={{ __html: marked(text || '') }}>
          </TextPreview>
        </FormGroupExtra>
      </FormGroup>


      <Box>
        <Label>Color</Label>
        <ColorSelection color={color} onChange={ c => setColor(c) }/>
      </Box>

      <Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '3rem' }}>
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
