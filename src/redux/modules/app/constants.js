import generateType from '../../../utils/actionTypes';

export const NAME = 'app';

export const HELLO = `${NAME}/HELLO`;
export const HI = `${NAME}/HI`;

export const LOAD_DATA = generateType(NAME, 'LOAD_DATA');
