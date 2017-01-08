import { HELLO, HI } from './constants';

const initialState = {
  message: 'Welcome'
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
    default:
      return state;
  }
}
