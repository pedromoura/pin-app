import * as PinRequests from '../Requests/Pin';

export const CHANGE_PIN_VALUE = 'CHANGE_PIN_VALUE';
export const CHANGE_PIN_VALID_STATE = 'CHANGE_PIN_VALID_STATE';
export const DELETE_PIN_VALUE = 'DELETE_PIN_VALUE';
export const RESET_PIN = 'RESET_PIN';
export const ADD_ATTEMPT = 'ADD_ATTEMPT';
export const RESET_ATTEMPT = 'RESET_ATTEMPT';

export const changePinValue = (pinValue) => ({
  type: CHANGE_PIN_VALUE,
  pinValue,
});

export const changePinState = (isPinValid) => ({
  type: CHANGE_PIN_VALID_STATE,
  isPinValid,
});

export const resetPin = () => ({
  type: RESET_PIN,
});

export const addAttempts = () => ({
  type: ADD_ATTEMPT,
});

export const resetAttemps = () => ({
  type: RESET_ATTEMPT,
});

export const validPinState = (isPinValid) => async (dispatch) => {
  if (!isPinValid) {
    dispatch(addAttempts());
  } else {
    dispatch(resetAttemps());
  }
  dispatch(changePinState(isPinValid));
};

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
  dispatch(validatePin());
};

export const onDeletePin = () => ({
  type: DELETE_PIN_VALUE,
});
