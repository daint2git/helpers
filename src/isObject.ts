import isNull from './isNull';
import isFunction from './isFunction';

function isObject(value: unknown): boolean {
  return (!isNull(value) && typeof value === 'object') || isFunction(value);
}

export default isObject;
