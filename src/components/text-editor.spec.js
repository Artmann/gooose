import React from 'react';
import TextEditor from './text-editor';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('TextEditor', () => {
  it('renders correctly in text mode', () => {
    const tree = renderer
      .create(<TextEditor text="**Hello World**"/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('updates the text', () => {
    const onChange = jest.fn();
    const textEditor = shallow(<TextEditor text="foobar" onChange={ onChange } />);

    textEditor.find('[data-test-id="text-area"]').simulate('change', {
      target: {
        value: '**Hello World**'
      }
    });

    expect(onChange).toHaveBeenCalledWith('**Hello World**');
  });

  it('toggles between edit and preview mode', () => {
    const textEditor = shallow(<TextEditor text="**Hello World**" />);

    expect(textEditor.find('[data-test-id="text-area"]')).toHaveLength(1);
    expect(textEditor.find('[data-test-id="preview"]')).toHaveLength(0);

    textEditor.find('[data-test-id="preview-button"]').simulate('click', { preventDefault: jest.fn() });

    expect(textEditor.find('[data-test-id="text-area"]')).toHaveLength(0);
    expect(textEditor.find('[data-test-id="preview"]')).toHaveLength(1);

    textEditor.find('[data-test-id="edit-button"]').simulate('click', { preventDefault: jest.fn() });

    expect(textEditor.find('[data-test-id="text-area"]')).toHaveLength(1);
    expect(textEditor.find('[data-test-id="preview"]')).toHaveLength(0);
  });

  it('displays the text', () => {
    const textEditor = mount(<TextEditor text="**Hello World**" />);

    expect(textEditor.find('[data-test-id="text-area"]').first().text()).toEqual('**Hello World**');
  });

  it('displays the text in preview mode', () => {
    const textEditor = mount(<TextEditor text="**Hello World**" />);

    textEditor.find('[data-test-id="preview-button"]').first().simulate('click', { preventDefault: jest.fn() });

    expect(textEditor.find('[data-test-id="preview"]').first().text().trim()).toEqual('Hello World');
  });
});
