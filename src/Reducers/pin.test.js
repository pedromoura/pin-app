import * as PinActions from '../Actions/pin';
import pin from './pin';

const defaultState = {
  pin: '',
  isPinChecked: false,
  isValid: false,
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
    }, {
      type: PinActions.RESET_PIN,
    })).toEqual({
      ...defaultState,
      pin: '',
    });
  });
});
