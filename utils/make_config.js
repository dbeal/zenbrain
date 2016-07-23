var fs = require('fs')
  , path = require('path')

module.exports = function make_config (p) {
  var HOME = process.env.HOME
  try {
    fs.mkdirSync(path.join(HOME, '.zenbot'), {mode: parseInt('0700', 8)})
  }
  catch (e) {}
  var filename = path.basename(p).replace(/\-sample/, '')
  var data = fs.readFileSync(p, {encoding: 'utf8'})
  var dest = path.join(HOME, '.zenbot', filename)
  try {
    fs.stat(dest)
  }
  catch (e) {
    fs.writeFileSync(dest, data, {mode: parseInt('0600', 8)})
  }
  return require(p)
}