import * as PinRequests from '../Requests/Pin';

export const CHANGE_PIN_VALUE = 'CHANGE_PIN_VALUE';
export const CHANGE_PIN_VALID_STATE = 'CHANGE_PIN_VALID_STATE';
export const DELETE_PIN_VALUE = 'DELETE_PIN_VALUE';
export const RESET_PIN = 'RESET_PIN';

const changePinValue = (pinValue) => ({
  type: CHANGE_PIN_VALUE,
  pinValue,
});

const validPinState = (isPinValid) => ({
  type: CHANGE_PIN_VALID_STATE,
  isPinValid,
});

const resetPin = () => ({
  type: RESET_PIN,
});

export const validatePin = () => async (dispatch, getState) => {
  const { pin } = getState().pin;
  if (pin.length === 4) {
    const isPinValid = PinRequests.validatePin(pin);
    dispatch(validPinState(isPinValid));
    dispatch(resetPin());
  }
};

export const onChangePin = (value) => async (dispatch, getState) => {
  const { pin } = getState().pin;
  if (pin.length < 4) {
    dispatch(changePinValue(value));
  }
  if (pin.length === 3) {
    dispatch(validatePin());
  }
};

export const onDeletePin = () => ({
  type: DELETE_PIN_VALUE,
});
