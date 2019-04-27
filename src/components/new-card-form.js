import React, { useState } from 'react';

import ColorSelection from './color-selection';
import PropTypes from 'prop-types';
import TextEditor from './text-editor';

export default function NewCardForm({ errors = [], createCard = () => {} }) {
  const [text, setText] = useState('As a Product Owner, I can add new stories for the team.');
  const [color, setColor] = useState('#eb5286');

  const submit = e => {
    e.preventDefault();
    createCard(text, color);
  };

  return (
    <form className="big-form" onSubmit={submit}>
      <h1 className="big-form__header">Add a New Card</h1>

      <div className="input">
        <label className="input__label">Text</label>
        <TextEditor text={ text } onChange={ t => setText(t) } />
      </div>

      <div className="input">
        <label className="input__label">Color</label>
        <ColorSelection color={color} onChange={ c => setColor(c) }/>
      </div>

      <div className="">
        <button className="button button--primary">Save</button>
      </div>
    </form>
  );
}

NewCardForm.propTypes = {
  createCard: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string)
};
