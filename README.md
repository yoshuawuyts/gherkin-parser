# gherkin-parser
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Parse gherkin feature files.

## Installation
```sh
$ npm install gherkin-parser
```

## Usage
```js
const gherkin = require('gherkin-parser')
const fs = require('fs')

fs.createReadStream('some-gherkin-file.feature')
  .pipe(gherkin())
  .pipe(process.stdout)
```

The parser turns cucumber files into AST. An example:
```feature
Feature: Can drink beer when thirsty
  As a drinker
  I want to take beer off the wall
  In order to satisfy my thirst
 
  Scenario: Can take a single beer
    Given 100 bottles of beer on the wall
    When a bottle is taken down
    Then there are 99 bottles of beer on the wall
```
```js
[
  {
    feature: 'Can drink beer when thirsty',
    perspective: 'drinker',
    desire: 'to take beer off the wall',
    reason: 'to satisfy my thirst',
    scenarios: [
      {
        scenario: 'Can take a single beer',
        given: [
          '100 bottles of beer on the wall'
        ],
        when: [
          'a bottle is taken down'
        ],
        then: [
          'there are 99 bottles of beer on the wall'
        ]
      }
    ]
  }
]
```

## API
### transformStream = gherkin()
Create a gherkin transform stream. Transforms gherkin `.feature` files into an
AST object.

## See Also
- [gherk.js](https://github.com/bakerface/gherk/blob/master/lib/gherk.js)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/gherkin-parser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gherkin-parser
[travis-image]: https://img.shields.io/travis/yoshuawuyts/gherkin-parser/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/gherkin-parser
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/gherkin-parser/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/gherkin-parser
[downloads-image]: http://img.shields.io/npm/dm/gherkin-parser.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/gherkin-parser
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
