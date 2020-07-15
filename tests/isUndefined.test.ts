import isUndefined from '../src/isUndefined';

describe('isUndefined', () => {
  it('should return true', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should return false', () => {
    expect(isUndefined(null)).toBe(false);
  });
});
