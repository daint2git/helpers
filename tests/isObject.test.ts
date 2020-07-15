import isObject from '../src/isObject';

describe('isObject', () => {
  it('should return true', () => {
    expect(isObject(() => {})).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject({})).toBe(true);
  });

  it('should return false', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(1)).toBe(false);
  });
});
