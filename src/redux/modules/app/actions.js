import { HELLO, HI } from './constants';

export const hello = () => {
  return {
    type: HELLO
  };
};

export const hi = () => {
  return {
    type: HI
  };
};
