'use strict';

// Unit Tests
const test = require('tape')
const randomUniqArray = require('./index')

const arr = ['earth', 'mars', 'jupiter', 'saturn']
const random = randomUniqArray(arr)

console.log(random(), random(), random())
// prints mars, earth, saturn

test('should generate a different element from previous call', function(t) {
    t.plan(2)
    const r = randomUniqArray(['earth', 'mars', 'jupiter', 'saturn']);

    t.notEqual(r(), r(), "test 1");
    t.notEqual(r(), r(), "test 2");
    t.end();
});

