import {
  CHANGE_PIN_VALUE,
  CHANGE_PIN_VALID_STATE,
  DELETE_PIN_VALUE,
} from '../Actions/pin';

const initialState = {
  pin: '',
  isValid: false,
};

const pin = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PIN_VALUE:
      return {
        ...state,
        pin: [...state.pin, action.pinValue].join(''),
      };
    case CHANGE_PIN_VALID_STATE:
      return {
        ...state,
        isValid: action.isPinValid,
      };
    case DELETE_PIN_VALUE:
      return {
        ...state,
        pin: [...state.pin].filter((val, i) => i !== state.pin.length - 1).join(''),
      };
    default:
      return {
        ...state,
      };
  }
};

export default pin;
