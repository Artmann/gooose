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
        <a
          className={`text-editor__switch ${isPreview ? '' : 'text-editor__switch--active'}`}
          onClick={() => setIsPreview(false) }
          data-test-id="edit-button"
        >
          Write
        </a>
        <a
          className={`text-editor__switch ${isPreview ? 'text-editor__switch--active' : ''}`}
          onClick={() => setIsPreview(true) }
          data-test-id="preview-button"
        >
          Preview
        </a>
      </div>
    </div>
  );
}

TextEditor.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
