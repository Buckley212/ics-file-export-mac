import { ics } from '../index';

test('Create an event', () => {
  var cal = ics();
  cal.addEvent(
    'Demo Event',
    'This is an all day event',
    'New York, NY',
    '8/7/2020',
    '8/7/2020',
  );
  expect(true).toBe(true);
});
