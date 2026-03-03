# node-worse-promise-resolve

`Promise.resolve`, but for [WorsePromise](https://github.com/worse-promise/spec)s.

## Installation
```bash
npm install node-worse-promise-resolve
```

## Usage
```js
var resolve = require("node-worse-promise-resolve")

resolve("hello").then(value => {
  console.log(value) // "hello"
})
```