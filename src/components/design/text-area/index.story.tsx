import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import TextArea from '.';

export default {
  decorators: [ withKnobs ],
  title: 'Text Area'
};

export const simple = () => <TextArea
  autoFocus = { boolean('Auto Focus', true) }
  onChange = {action('changed')}
  placeholder = { text('Placeholder', 'As a Product Owner, I can add new stories for the team.') }
  rows = { number('Rows', 3) }
  value = { text('Value', '') }
  />;
