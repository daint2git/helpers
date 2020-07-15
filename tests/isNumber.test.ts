import isNumber from '../src/isNumber';

describe('isNumber', () => {
  it('should return true', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(new Number(1))).toBe(true);
  });

  it('should return false', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
