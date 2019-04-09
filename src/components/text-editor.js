import React, { useState } from 'react';

import marked from 'marked';

export default function TextEditor({ text, onChange }) {
  const [isPreview, setIsPreview] = useState(false);

  const previewHtml = () => ({ __html: marked(text || '') });
  const textEditor = (
    <textarea value={text} onChange={event => onChange(event.target.value)} className="text-editor__area"/>
  );
  const preview = (
    <p dangerouslySetInnerHTML={previewHtml()} className="text-editor__preview"></p>
  );

  return (
    <div className="text-editor">
      { isPreview ? preview : textEditor }
      <div>
        <a className={`text-editor__switch ${isPreview ? '' : 'text-editor__switch--active'}`} onClick={() => setIsPreview(false) }>Write</a>
        <a className={`text-editor__switch ${isPreview ? 'text-editor__switch--active' : ''}`} onClick={() => setIsPreview(true) }>Preview</a>
      </div>
    </div>
  );
}
