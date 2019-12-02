import React from 'react';
import TextInput from '.';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('TextInput', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TextInput label="Name" name="name" value="Chris" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const tree = renderer
      .create(<TextInput
        label="Name"
        name="email"
        autoFocus={true}
        placeholder="sam@company.com"
        required={true}
        type="email"
        value="chris@company.com"
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Triggers onChange', () => {
    const callback = jest.fn();
    const event = { target: { value: 'the-value' } };
    const component = shallow(<TextInput label="Name" name="name" value="Chris" onChange={callback}/>);


    component.find('[data-test-input="name"]').simulate('change', event);

    expect(callback).toHaveBeenCalledWith(event);
  });
});
