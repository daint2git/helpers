import getTag from './getTag';
import isNull from './isNull';

function isPlainObject(value: unknown): boolean {
  if (getTag(value) !== '[object Object]') return false;

  const prototype = Object.getPrototypeOf(value) as unknown;
  return isNull(prototype) || prototype === Object.prototype;
}

export default isPlainObject;
