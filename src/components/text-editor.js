import React, { useState } from 'react';

import PropTypes from 'prop-types';
import marked from 'marked';
import styled from 'styled-components';

const Area = styled.textarea`
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: ${ props => props.theme.inputColor };
  display: block;
  font-family:${ props => props.theme.fontMono };
  font-size: 0.8rem;
  line-height: 1.25;
  margin: 0;
  margin-bottom: 0.5rem;
  min-height: 14rem;
  padding: 0.5rem 0;
  width: 100%;

  &:focus {
    border-bottom: solid 1px #6c72b5;
    margin-bottom: 1rem;
    outline: none;
  }
`;

const Preview = styled.p`
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: ${ props => props.theme.textColor };
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 0.5rem;
  min-height: 14rem;
  width: 100%;

  a {
    color: ${ props => props.theme.linkColor };
  }

  pre {
    background: #2e2e2e;
    font-family: $font-mono;
    font-size: 0.75rem;
    padding: 1rem;
    white-space: pre-wrap;       /* css-3 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;
  }

  h1 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1rem;
  }

  h3, h4, h5, h6 {
    font-size: 0.8rem;
  }

  img, video, iframe {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
  }

  ul {
    list-style-type: square;
    margin: 0;
    padding-left: 1rem;
  }
`;
const Switch = styled.button`
  background: none;
  border: none;
  color: ${ props => props.theme.headerColor };
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  font-weight: bold;
  padding-right: 0.75rem;
  text-align: left;
  text-decoration: ${ props => props.active ? 'underline' : 'none' };
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;
const Switches = styled.div `
  margin: 1rem 0;
`;

export default function TextEditor({ text, onChange = () => {} }) {
  const [isPreview, setIsPreview] = useState(false);

  const previewHtml = () => ({ __html: marked(text || '') });
  const textEditor = (
    <Area value={text} onChange={event => onChange(event.target.value)} data-test-id="text-area" />
  );
  const preview = (
    <Preview dangerouslySetInnerHTML={previewHtml()} data-test-id="preview"></Preview>
  );

  return (
    <div>
      { isPreview ? preview : textEditor }
      <Switches>
        <Switch
          active={!isPreview}
          onClick={ e => {
            e.preventDefault();
            setIsPreview(false);
          }}
          data-test-id="edit-button"
        >
          Write
        </Switch>
        <Switch
         active={isPreview}
          onClick={ e => {
            e.preventDefault();
            setIsPreview(true);
          }}
          data-test-id="preview-button"
        >
          Preview
        </Switch>
      </Switches>
    </div>
  );
}

TextEditor.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
