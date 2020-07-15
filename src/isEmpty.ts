import isNull from './isNull';
import isString from './isString';
import isObject from './isObject';

/**
 * Checks if `value` is empty
 */
function isEmpty(value: unknown): boolean {
  if (isNull(value)) return true;
  if (isString(value) || Array.isArray(value)) return (value as string).length === 0;
  if (isObject(value)) return Object.keys(value as Record<string, unknown>).length === 0;
  return true;
}

export default isEmpty;
