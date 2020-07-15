import isPlainObject from '../src/isPlainObject';

describe('isPlainObject', () => {
  it('should return true', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return false', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
    expect(isPlainObject(new (class Foo {})())).toBe(false);

    class Bar {}
    const bar = new Bar();
    bar.constructor = Object;
    expect(isPlainObject(bar)).toBe(false);
  });
});
