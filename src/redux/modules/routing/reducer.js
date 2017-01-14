import { ROUTE } from './constants';

const initialState = {
  id: 'app',
  title: 'Home',
  index: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ROUTE:
      return {
        ...state,
        id: action.route.id,
        title: action.route.title,
        index: action.route.index
      };
    default:
      return state;
  }
}
