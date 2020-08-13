var moveZeros = function (arr) {
  var nonzero = arr.filter(x => x!== 0)
  var zero = arr.filter(x => x=== 0)
  return nonzero.concat(zero)
}
