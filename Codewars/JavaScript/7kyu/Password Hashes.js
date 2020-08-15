function passHash(str) {
  var crypto = require('crypto')
  return crypto.createHash('md5').update(str).digest("hex")
}
