export default function toCamelCase(object: { [key: PropertyKey]: any }) {
  if (typeof object !== 'object' || Array.isArray(object) || object === null) {
    return object;
  }

  const camelCaseobject: { [key: PropertyKey]: any } = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
      camelCaseobject[camelCaseKey] = toCamelCase(object[key]);
    }
  }
  return camelCaseobject;
}
