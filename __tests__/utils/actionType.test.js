import actionType from '../../src/utils/actionTypes';

describe('action type', () => {
  it('should show corrected object', () => {
    const name = 'app';
    const type = 'LOAD';
    const expectedValue = {
      o: `${name}/${type}`,
      pending: `${name}/${type}_PENDING`,
      success: `${name}/${type}_FULFILLED`,
      error: `${name}/${type}_REJECTED`
    };
    expect(actionType(name, type)).toEqual(expectedValue);
  });
});
