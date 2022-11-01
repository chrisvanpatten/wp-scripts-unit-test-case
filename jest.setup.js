// This is needed top stop getter/setter exports from freezing items, so that we can mock them
const { defineProperty } = Object;
Object.defineProperty = function (object, name, meta) {
  if (meta.get && !meta.configurable) {
    return defineProperty(object, name, {
      ...meta,
      configurable: true, // prevent freezing
    });
  }

  return defineProperty(object, name, meta);
};

import "@testing-library/jest-dom";
