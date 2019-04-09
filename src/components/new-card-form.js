import React, { useState } from 'react';

import ColorSelection from './color-selection';
import TextEditor from './text-editor';

export default function NewCardForm({ createCard }) {
  const [text, setText] = useState('As a Product Owner, I can add new stories for the team.');

  return (
    <form className="big-form">
      <h1 className="big-form__header">Add a New Card</h1>

      <div className="input">
        <label className="input__label">Text</label>
        <TextEditor text={ text } onChange={ t => setText(t) } />
      </div>

      <div className="input">
        <label className="input__label">Color</label>
        <ColorSelection />
      </div>

      <div className="">
        <button className="button button--primary">Save</button>
      </div>
    </form>
  );
}
