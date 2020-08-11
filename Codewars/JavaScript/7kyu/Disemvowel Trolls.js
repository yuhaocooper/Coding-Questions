function disemvowel(str) {
  var reg = /[aeiou]/gi
  return str.replace(reg,"")
}
