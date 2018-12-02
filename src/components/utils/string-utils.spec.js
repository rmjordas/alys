import { pluralize, styleLengths } from './string-utils';

test("add an 's' to common words", () => {
  const expected = 'words';

  expect(pluralize('word')).toBe(expected);
});

describe('styleLengths', () => {
  test('return correct unit depending on input type', () => {
    const expected = '10px';

    expect(styleLengths(10)).toBe(expected);
    expect(styleLengths('10px')).toBe(expected);
    expect(styleLengths(10, 'px')).toBe(expected);
  });

  test('does not append a unit for value with trailing letters', () => {
    const expected = '1023s';

    expect(styleLengths('1023s')).toBe(expected);
  });
});
