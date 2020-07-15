import getTag from './getTag';

/**
 * Checks if `value` is a number primitive,
 */
function isNumber(value: unknown): boolean {
  return typeof value === 'number' || getTag(value) === '[object Number]';
}

export default isNumber;
