import getTag from './getTag';

/**
 * Checks if `value` is a string primitive,
 */
function isString(value: unknown): boolean {
  return typeof value === 'string' || getTag(value) === '[object String]';
}

export default isString;
