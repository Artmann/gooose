import PasswordStrengthIndicatorBar from './password-strength-indicator-bar';
import React from 'react';
import renderer from 'react-test-renderer';

describe('PasswordStrengthIndicatorBar', () => {
  it('renders correctly when deactivated', () => {
    const tree = renderer
      .create(<PasswordStrengthIndicatorBar color='#330000' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when activated', () => {
    const tree = renderer
      .create(<PasswordStrengthIndicatorBar color='#330000' active={true} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
