import React from 'react';
import Timeline from './timeline';
import { shallow } from 'enzyme';

describe('Timeline', () => {
  it('renders the events in the right order', () => {
    const events = [
      { id: 1, name: 'card.created', data: {}, timestamp: '2019-07-25 08:23:00', user: { name: 'Christoffer Artmann' } },
      { id: 2, name: 'card.moved', data: { origin: 'Backlog', destination: 'In Progress' }, timestamp: '2019-07-29 12:23:12', user: { name: 'Christoffer Artmann' } },
      { id: 3, name: 'card.comment.created', data: { text: 'Looking at all the options, we should probably move to secure all the bases before they belongs to someone else.' }, user: { name: 'Christoffer Artmann' }, timestamp: '2019-07-28 14:32:21' }
    ];
    const wrapper = shallow(<Timeline events={events} />);

    const eventComponents = wrapper.find('[data-test-event-id]');
    const ids = eventComponents.map(component => component.prop('data-test-event-id'));

    expect(eventComponents.length).toEqual(3);
    expect(ids).toEqual([2, 3, 1]);
  });
});
