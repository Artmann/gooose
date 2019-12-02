import { render} from '@testing-library/react'
import React, { Fragment } from 'react';
import Label from '.';

describe('Label', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(
      <Fragment>
        <Label target="message">Hello World</Label>
        <input type="text" id="message" />
      </Fragment>
    );

    expect(getByLabelText('Hello World')).toBeInTheDocument();
  });
});
