import { render } from '@testing-library/react';
import React from 'react';

import Card from './card';

describe('Card', () => {
  const card = {
    id: 'abc123',
    boardId: 'b123',
    blocked: false,
    color: '#33ff22',
    columnId: 'c123',
    key: 'whispering-snow-123',
    order: 128,
    summary: 'Do some cool stuff.',
    text: 'A longer description of the cool stuff we want to do.',
  };

  test('it displays the summary', () => {
    const { getByTestId } = render(<Card card={ card } />);

    expect(getByTestId('card-text').textContent).toEqual('Do some cool stuff.');
  });

  test('it displays the key', () => {
    const { getByTestId } = render(<Card card={ card } />);

    expect(getByTestId('card-key').textContent).toEqual('whispering-snow-123');
  });

  test('it links to the card', () => {
    const { getByTestId } = render(<Card card={ card } />);

    expect(getByTestId('card-link').getAttribute('href'))
      .toEqual('/boards/b123/cards/whispering-snow-123');
  });
});
