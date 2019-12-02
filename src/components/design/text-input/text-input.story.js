import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import TextInput from '.';

export default {
  decorators: [ withKnobs ],
  title: 'Text Input'
};

export const withLabel = () => <TextInput
  label={ text('Label', 'Your Name') }
  placeholder={ text('Placeholder', 'John Smith') }
  autoFocus={ boolean('Auto Focus', true) }
  required={ boolean('Required', true) }
  />;
