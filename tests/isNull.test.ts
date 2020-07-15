import isNull from '../src/isNull';

describe('isNull', () => {
  it('should return true', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull({})).toBe(false);
  });
});
