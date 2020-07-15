import isString from '../src/isString';

describe('isString', () => {
  it('should return true', () => {
    expect(isString('abc')).toBe(true);
    expect(isString(new String('abc'))).toBe(true);
  });

  it('should return false', () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});
