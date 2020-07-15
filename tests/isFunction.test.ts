import isFunction from '../src/isFunction';

describe('isFunction', () => {
  it('should return true', () => {
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);
    expect(isFunction(function* any() {})).toBe(true);
    expect(isFunction(class Any {})).toBe(true);
    expect(isFunction(Math.round)).toBe(true);
  });

  it('should return false', () => {
    expect(isFunction(true)).toBe(false);
    expect(isFunction('abc')).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});
