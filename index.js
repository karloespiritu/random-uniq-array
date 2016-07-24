'use strict';

const randomUniq =  require('random-uniq');

module.exports = function(arr) {

  if ((Array.isArray(arr) === false)
    ||
    (arr.length <= 2)) {
    throw new TypeError('Input must be an array with at least 3 items')
  }

  const random = randomUniq(0, arr.length - 1)

  return function () {
    return arr[random()]
  }
}

