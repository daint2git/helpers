import getTag from '../src/getTag';

describe('getTag', () => {
  it('should return [object Object]', () => {
    expect(getTag({})).toBe('[object Object]');
  });

  it('should return [object String]', () => {
    expect(getTag('abc')).toBe('[object String]');
  });

  it('should return [object Boolean]', () => {
    expect(getTag(false)).toBe('[object Boolean]');
  });

  it('should return [object Null]', () => {
    expect(getTag(null)).toBe('[object Null]');
  });

  it('should return [object Number]', () => {
    expect(getTag(1)).toBe('[object Number]');
  });
});
