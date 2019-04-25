import React, { useState } from 'react';

import PropTypes from 'prop-types';
import marked from 'marked';

export default function TextEditor({ text, onChange = () => {} }) {
  const [isPreview, setIsPreview] = useState(false);

  const previewHtml = () => ({ __html: marked(text || '') });
  const textEditor = (
    <textarea value={text} onChange={event => onChange(event.target.value)} className="text-editor__area" data-test-id="text-area" />
  );
  const preview = (
    <p dangerouslySetInnerHTML={previewHtml()} className="text-editor__preview" data-test-id="preview"></p>
  );

  return (
    <div className="text-editor">
      { isPreview ? preview : textEditor }
      <div>
        <button
          className={`text-editor__switch ${isPreview ? '' : 'text-editor__switch--active'}`}
          onClick={ e => {
            e.preventDefault();
            setIsPreview(false);
          }}
          data-test-id="edit-button"
        >
          Write
        </button>
        <button
          className={`text-editor__switch ${isPreview ? 'text-editor__switch--active' : ''}`}
          onClick={ e => {
            e.preventDefault();
            setIsPreview(true);
          }}
          data-test-id="preview-button"
        >
          Preview
        </button>
      </div>
    </div>
  );
}

TextEditor.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
