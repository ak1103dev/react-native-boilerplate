import { ROUTE } from './constants';

const initialState = {
  route: {
    name: 'App'
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ROUTE:
      return {
        ...state,
        route: action.route
      };
    default:
      return state;
  }
}
