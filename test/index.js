const concat = require('concat-stream')
const test = require('tape')
const fs = require('fs')
const gherkin = require('../')

test('should assert input types', function (t) {
  t.plan(3)

  const rs = fs.createReadStream(__dirname + '/file.feature')
  const ts = gherkin()
  const ws = concat({ object: true }, function (buf) {
    const ast = JSON.parse(buf.toString())
    t.equal(typeof ast, 'object')

    t.deepEqual(ast, [ {
      perspective: 'drinker',
      feature: 'Can drink beer when thirsty',
      desire: 'to take beer off the wall',
      reason: 'to satisfy my thirst',
      scenarios: [ {
        given: [ '100 bottles of beer on the wall' ],
        scenario: 'Can take a single beer',
        then: [ 'there are 99 bottles of beer on the wall' ],
        when: [ 'a bottle is taken down' ]
      } ]
    } ])
  })

  ts.on('end', t.pass.bind('null', 'stream ended'))

  rs.pipe(ts).pipe(ws)
})
