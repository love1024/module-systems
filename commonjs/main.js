const _ = require("lodash");

// Generate a random number between 0 and 10
function generate() {
  return _.random(0, 10);
}

module.exports = {
  generate: generate,
};
