// main.js
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD, define modules.
    define(["exports", "../amd/libs/lodash.js"], factory);
  } else if (typeof exports === "object" && typeof exports.nodeName !== "string") {
    // CommonJS, use exports
    factory(exports, require("lodash"));
  } else {
    // Browser globals scripts, create {} for scope
    factory((root.module = {}));
  }
})(typeof self !== "undefined" ? self : this, function (exports, _) {
  function generate() {
    return _.random(0, 10);
  }

  // attach properties to the exports object to define
  exports.generate = generate;
});
