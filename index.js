const through = require('through2')
const gherk = require('gherk')

module.exports = gherkinParser

// Parse gherkin feature files
// null -> tstream
function gherkinParser () {
  const arr = []
  return through(cache, parse)

  function cache (chunk, enc, cb) {
    arr.push(chunk.toString())
    cb()
  }

  function parse (cb) {
    const raw = arr.join('')
    const ast = gherk.parse(raw)
    this.push(JSON.stringify(ast))
    cb()
  }
}
