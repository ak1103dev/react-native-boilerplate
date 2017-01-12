import { ROUTE } from './constants';

export const changeRoute = (route) => {
  return {
    type: ROUTE,
    route
  };
};
