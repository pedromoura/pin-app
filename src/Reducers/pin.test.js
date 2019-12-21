import * as PinActions from '../Actions/pin';
import pin from './pin';

const defaultState = {
  pin: '',
  isPinChecked: false,
  isValid: false,
  attempts: 0,
};

describe('Pin reducer test suite', () => {
  test('should return the pin initial state', () => {
    expect(pin(undefined, {})).toEqual(defaultState);
  });

  test('change pin value', () => {
    expect(pin(undefined, {
      type: PinActions.CHANGE_PIN_VALUE,
      pinValue: '2',
    })).toEqual({
      ...defaultState,
      pin: '2',
    });
  });

  test('change pin valid state', () => {
    expect(pin(undefined, {
      type: PinActions.CHANGE_PIN_VALID_STATE,
      isPinValid: true,
    })).toEqual({
      ...defaultState,
      isPinChecked: true,
      isValid: true,
    });
  });

  test('delete pin value', () => {
    expect(pin({
      pin: '234',
      isPinChecked: false,
      isValid: false,
      attempts: 0,
    }, {
      type: PinActions.DELETE_PIN_VALUE,
    })).toEqual({
      ...defaultState,
      pin: '23',
    });
  });

  test('reset pin value', () => {
    expect(pin({
      pin: '234',
      isPinChecked: false,
      isValid: false,
      attempts: 0,
    }, {
      type: PinActions.RESET_PIN,
    })).toEqual({
      ...defaultState,
      pin: '',
    });
  });

  test('add attempt', () => {
    expect(pin(undefined, {
      type: PinActions.ADD_ATTEMPT,
    })).toEqual({
      ...defaultState,
      attempts: 1,
    });
  });

  test('reset attempts', () => {
    expect(pin({
      pin: '',
      isPinChecked: false,
      isValid: false,
      attempts: 3,
    }, {
      type: PinActions.RESET_ATTEMPT,
    })).toEqual({
      ...defaultState,
      attempts: 0,
    });
  });
});
