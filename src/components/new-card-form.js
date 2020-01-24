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
import TextEditor from './text-editor';

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
  line-height: 1.65;
  min-height: 3rem;
  padding: 0 1rem;

  h1 { border-bottom: solid 1px #CBD5E0; font-size: 1.45rem; }
  h2 { font-size: 1.2rem; }
  h3, h4, h5 { font-size: 1rem; }
  img { height: auto; max-width: 100%; }
`;

const userStoryExamples = [
  'As a power user, I can specify files or folders to backup based on file size, date created and date modified.',
  `As a user, I can indicate folders not to backup so that my backup drive isn't filled up with things I don't need saved.`,
  'As a driver, I want to block badly behaved passengers so they are never shown me again.',
  'As an Acquisition Gateway User, I need to select an Auction product in the Acquisition ordering platform so that I can bid on it.',
  'As a Content Owner, I want to be able to create product content so that I can provide information and market to customers.',
  'As an Editor, I want to review content before it is published so that I can assure it is optimized with correct grammar and tone.'
];

function sanitizeFileName(name) {
  return name.replace(/[^a-zA-Z0-9-]/g, '-');
}

export default function NewCardForm({
  createCard,
  errorMessage = null,
  imageUploader,
  isSubmitting = false
}) {
  const defaultStory = userStoryExamples[Math.floor(Math.random() * userStoryExamples.length)];
  const [ color, setColor ] = useState('#eb5286');
  const [ isUploading, setIsUploading ] = useState(false);
  const [ summary, setSummary ] = useState(defaultStory);
  const [ text, setText ] = useState('');
  const [ uploadErrorMessage, setUploadErrorMessage ] = useState(undefined);

  const onSubmit = e => {
    e.preventDefault();
    createCard(summary, text, color);
  };

  const uploadFile = async({ file, textPosition }) => {
    setIsUploading(true);
    setUploadErrorMessage(undefined);

    imageUploader.upload(file, url => {
      const link = `![${ sanitizeFileName(file.name) }](${ url })`;

      setText(text.substring(0, textPosition) + link + text.substring(textPosition));
      setIsUploading(false);
      setUploadErrorMessage(undefined);
    }, error => {
      setIsUploading(false);
      setUploadErrorMessage(error.message);
    });
  };

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  return (
    <BigForm onSubmit={onSubmit} encType="multipart/form-data">
      <BigFormHeader>
        Create new Card
      </BigFormHeader>

      <FormError message={errorMessage} />

      <FormGroup toggle={ true } >
        <FormGroupMain>
          <Label>
            Summary
          </Label>
          <TextArea
            autoFocus = { true }
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
              summary: summary
            }}
            disableLink = { true }
            />
        </FormGroupExtra>
      </FormGroup>

      <FormGroup toggle={ true } >
        <FormGroupMain>
          <Label>
            More Details
          </Label>
          <TextEditor
            isUploadingFile={ isUploading }
            placeholder='Provide a more detailed description.'
            text={ text }
            onChange={ value => setText(value) }
            onUploadedFile={ uploadFile }
            uploadErrorMessage={ uploadErrorMessage }
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
