# random-uniq-array

Get a unique element from an array successively

## Install

$ npm install --save random-uniq-array

## Usage

```js
const randomUniqArray = require('random-uniq-array')

const arr = ['earth', 'mars', 'jupiter', 'saturn']
const random = randomUniqArray(arr)

console.log(random(), random(), random())
// prints mars, earth, saturn
```