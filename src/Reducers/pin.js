import {
  CHANGE_PIN_VALUE,
  CHANGE_PIN_VALID_STATE,
  DELETE_PIN_VALUE,
  RESET_PIN,
} from '../Actions/pin';

const initialState = {
  pin: '',
  isPinChecked: false,
  isValid: false,
};

const pin = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PIN_VALUE:
      return {
        ...state,
        isPinChecked: false,
        pin: [...state.pin, action.pinValue].join(''),
      };
    case CHANGE_PIN_VALID_STATE:
      return {
        ...state,
        isPinChecked: true,
        isValid: action.isPinValid,
      };
    case DELETE_PIN_VALUE:
      return {
        ...state,
        isPinChecked: false,
        pin: [...state.pin].filter((val, i) => i !== state.pin.length - 1).join(''),
      };
    case RESET_PIN:
      return {
        ...state,
        pin: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default pin;
