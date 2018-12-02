import { filterInt } from './number-utils';

/** Returns the plural form of a word. */
export function pluralize(word) {
  return `${word}s`;
}

/** Returns a valid style length value. */
export function styleLengths(length, unit = 'px') {
  if (isNaN(filterInt(length))) {
    return length;
  }

  return `${length}${unit}`;
}
