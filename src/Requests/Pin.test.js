import * as PinRequests from './Pin';

test('validate pin request', () => {
  const result = PinRequests.validatePin('1234');
  expect(result).toEqual(false);
  const valid = PinRequests.validatePin('1991');
  expect(valid).toEqual(true);
});
