// Define a module
define(["./libs/lodash.js"], function (_) {
  function generate() {
    return _.random(0, 10);
  }
  return { generate: generate };
});
