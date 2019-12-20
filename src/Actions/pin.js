import * as PinRequests from '../Requests/Pin';

export const CHANGE_PIN_VALUE = 'CHANGE_PIN_VALUE';
export const CHANGE_PIN_VALID_STATE = 'CHANGE_PIN_VALID_STATE';
export const DELETE_PIN_VALUE = 'DELETE_PIN_VALUE';

const changePinValue = (pinValue) => ({
  type: CHANGE_PIN_VALUE,
  pinValue,
});

const validPinState = (isPinValid) => ({
  type: CHANGE_PIN_VALID_STATE,
  isPinValid,
});

export const validatePin = (pinValue) => async (dispatch) => {
  if (pinValue.length === 4) {
    const isPinValid = PinRequests.validatePin(pinValue);
    dispatch(validPinState(isPinValid));
  }
};

export const onChangePin = (pinValue) => async (dispatch, getState) => {
  const { pin } = getState().pin;
  if (pin.length < 4) {
    dispatch(changePinValue(pinValue));
  }
  dispatch(validatePin(pinValue));
};

export const onDeletePin = () => ({
  type: DELETE_PIN_VALUE,
});
