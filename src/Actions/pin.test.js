import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as PinActions from './pin';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Pin Actions test suite', () => {
  test('on change pin value', () => {
    const expectedActions = [
      { type: PinActions.CHANGE_PIN_VALUE, pinValue: '1' },
    ];

    const store = mockStore({ pin: { pin: '' } });
    return store.dispatch(PinActions.onChangePin('1')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('validate pin action', () => {
    const expectedActions = [
      { type: PinActions.CHANGE_PIN_VALID_STATE, isPinValid: false },
      { type: PinActions.RESET_PIN },
    ];

    const store = mockStore({ pin: { pin: '1982' } });
    return store.dispatch(PinActions.validatePin()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('on delete pin', () => {
    expect(PinActions.onDeletePin()).toEqual({
      type: 'DELETE_PIN_VALUE',
    });
  });
});
