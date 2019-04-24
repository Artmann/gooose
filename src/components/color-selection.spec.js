import ColorSelection from "./color-selection";
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('ColorSelection', () => {
  it('calls onChange when you click a color', () => {
    const onChange = jest.fn();
    const wrapper = mount(<ColorSelection color='#2779bd' onChange={ onChange } />);

    wrapper
      .find('[data-test-color="#eb5286"]')
      .first()
      .simulate('click');

    expect(onChange).toHaveBeenCalledWith('#eb5286');
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<ColorSelection />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a selected color', () => {
    const tree = renderer
      .create(<ColorSelection color='#2779bd' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a random color', () => {
    const tree = renderer
      .create(<ColorSelection color='red' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
