/**
 * Gets the `toStringTag` of `value`.
 */
function getTag(value: unknown): string {
  return Object.prototype.toString.call(value);
}

export default getTag;
