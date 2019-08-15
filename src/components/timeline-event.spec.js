import React from 'react';
import TimelineEvent from './timeline-event';
import { shallow } from 'enzyme';

describe('Timeline Event', () => {
  const aFewMinutesAgo = new Date((Date.now() - 1000 * 60 * 33)).toString();
  const aFewHoursAgo = new Date((Date.now() - 1000 * 60 * 60 * 5.2)).toString();
  const aFewDaysAgo = new Date((Date.now() - 1000 * 60 * 60 * 24 * 2)).toString();
  const aFewWeeksAgo = new Date((Date.now() - 1000 * 60 * 60 * 24 * 7 * 3)).toString();
  const aFewMonthsAgo = new Date((Date.now() - 1000 * 60 * 60 * 24 * 30 * 5)).toString();
  const aFewYearsAgo = new Date((Date.now() - 1000 * 60 * 60 * 24 * 365 * 2)).toString();

  describe('Date', () => {
    const testCases = [
      ['35 minutes ago.', aFewMinutesAgo],
      ['5 hours ago.', aFewHoursAgo],
      ['2 days ago.', aFewDaysAgo],
      ['3 weeks ago.', aFewWeeksAgo],
      ['5 months ago.', aFewMonthsAgo],
      ['2 years ago.', aFewYearsAgo]
    ];

    it.each(testCases)('renders correctly for events that happend %s', (expected, timestamp) => {
      const event = {
        name: 'card.created',
        data: {},
        timestamp,
        user: { name: 'Chris' }
      };

      const wrapper = shallow(
        <TimelineEvent
          isLast={false}
          event={event}
          />
      );
      const text = wrapper.find('[data-test-id="timestamp"]').text();

      expect(text).toEqual(expected);
    });
  });

  describe('Icon', () => {
    const testCases = [
      ['card.created', 'far fa-heart'],
      ['card.moved', 'far fa-hand-paper'],
      ['card.comment.created', 'far fa-comments'],
    ];

    it.each(testCases)('renders correctly for %s', (name, className) => {
      const event = {
        name,
        data: {},
        timestamp: aFewWeeksAgo,
        user: {
          name: 'Chris'
        }
      };
      const wrapper = shallow(
        <TimelineEvent
          isLast={false}
          event={event}
          />
      );
      const icon = wrapper.find('[data-test-id="icon"]');

      expect(icon.length).toEqual(1);
      expect(icon.prop('className')).toEqual(className);
    });
  });

  describe('Text', () => {
    const testCases = [
      ['card.created', 'Mark', {}, 'Created by Mark'],
      ['card.moved', 'Sarah', { origin: 'Doing', destination: 'Done'}, 'Sarah moved the card from Doing to Done'],
      ['card.comment.created', 'Jenny', { text: 'This is a test comment.' }, 'Jenny left a comment.This is a test comment.']
    ];

    it.each(testCases)('renders correctly for %s', (eventName, name, data, expected) => {
      const event = {
        name: eventName,
        data,
        timestamp: aFewWeeksAgo,
        user: { name }
      };
      const wrapper = shallow(
        <TimelineEvent
          isLast={false}
          event={event}
          />
      );
      const text = wrapper.find('[data-test-id="text"]').text().trim();

      expect(text).toEqual(expected);
    });
  });
});
