import isEmpty from '../src/isEmpty';

describe('isEmpty', () => {
  it('should return true', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(true)).toBe(true);
  });

  it('should return false', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });
});
