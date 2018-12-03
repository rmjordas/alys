import { parseType } from './props-utils';

test('generates correct list for simple types', () => {
  const type = { name: 'string' };
  const expected = ['string'];

  expect(parseType(type)).toEqual(expected);
});

test('generates correct list for "enum" type', () => {
  const type = {
    name: 'enum',
    value: [
      { value: "'text'", computed: false },
      { value: "'number'", computed: false },
      { value: "'password'", computed: false },
    ],
  };
  const expected = ['text', 'number', 'password'];

  expect(parseType(type)).toEqual(expected);
});

test('returns an empty array when "enum" value is undefined', () => {
  const type = { name: 'enum' };
  const actual = parseType(type);

  expect(Array.isArray(actual)).toBe(true);
  expect(actual).toHaveLength(0);
});

test('generates correct list for "union" type', () => {
  const type = {
    name: 'union',
    value: [
      { name: 'string' },
      { name: 'number' },
      { name: 'arrayOf', value: { name: 'string' } },
    ],
  };
  const expected = ['string', 'number', 'string[]'];

  expect(parseType(type)).toEqual(expected);
});

test('generates correct list for "custom" type', () => {
  const type = { name: 'custom', raw: 'testProp' };
  const expected = ['testProp'];

  expect(parseType(type)).toEqual(expected);
});
