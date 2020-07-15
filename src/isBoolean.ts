import getTag from './getTag';

/**
 * Checks if `value` is a boolean primitive,
 */
function isBoolean(value: unknown): boolean {
  return value === true || value === false || getTag(value) === '[object Boolean]';
}

export default isBoolean;
