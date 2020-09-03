/*!
 * js-sum-of-two
 */

'use strict'

/**
 * Module exports.
 * @public
 */

module.exports = add;

/**
 * Addition of two numbers.
 * Returns the result of sum.
 *
 * @param {number} [valueA] number to perform addition.
 * @param {number} [valueB] number to perform addition.
 * @return {number} result of the sum
 * @public
 */

function add (valueA, valueB) {
  var sum = valueA + valueB;

  return sum;
}
