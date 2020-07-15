/**
 * Checks if `value` is a `function`
 */
function isFunction(value: unknown): boolean {
  return typeof value === 'function';
}

export default isFunction;
