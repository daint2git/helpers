import isBoolean from '../src/isBoolean';

describe('isBoolean', () => {
  it('should return true', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(new Boolean(1))).toBe(true);
  });

  it('should return false', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });
});
