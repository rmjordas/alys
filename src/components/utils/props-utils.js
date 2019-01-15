export const PROPTYPE_SIMPLE = 'simple';
export const PROPTYPE_UNION = 'union';
export const PROPTYPE_ENUM = 'enum';
export const PROPTYPE_INSTANCE_OF = 'instanceOf';
export const PROPTYPE_CUSTOM = 'custom';

/**
 * Accepts a `react-docgen` type and returns an array containing the parsed
 * types. Returns an empty array if type cannot be parsed.
 */
export function parseType(type) {
  const { name, value } = type;
  if (!name) {
    return [];
  }

  switch (name) {
    case PROPTYPE_ENUM:
      return parseEnum(value);
    case PROPTYPE_UNION:
      return parseUnion(value);
    case PROPTYPE_INSTANCE_OF:
      return parseInstanceOf(value);
    case PROPTYPE_CUSTOM:
    default:
      return [parseCustomOrSimple(type)];
  }
}

function parseEnum(value = []) {
  return value.map((v) => v.value.replace(/'/g, ''));
}

function parseUnion(value = []) {
  return value.map((v) => {
    if (v.name === 'arrayOf') {
      return `${v.value.name}[]`;
    }

    return parseCustomOrSimple(v);
  });
}

function parseInstanceOf(value = {}) {
  return [value];
}

function parseCustomOrSimple(value = {}) {
  return value.name === PROPTYPE_CUSTOM ? value.raw : value.name;
}
