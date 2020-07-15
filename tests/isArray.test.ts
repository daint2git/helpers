import isArray from '../src/isArray';

describe('isArray', () => {
  it('should return true', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(new Array(3))).toBe(true);
  });

  it('should return false', () => {
    expect(isArray(null)).toBe(false);
    expect(isArray({})).toBe(false);
  });
});
