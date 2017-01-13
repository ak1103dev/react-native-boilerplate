import {
  HELLO,
  HI,
  LOAD_DATA
} from './constants';

const initialState = {
  message: 'Welcome',
  data: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HELLO:
      return {
        ...state,
        message: 'Hello World!!!'
      };
    case HI:
      return {
        ...state,
        message: 'HI John!!!'
      };
    case LOAD_DATA.success:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
