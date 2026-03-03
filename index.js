var wp = require("worse-promise").worsePromise
var p = require("is-a-promise")

function resolve(x) {
  return wp(p.resolve(x))
}

module.exports = resolve