function positiveToNegative(b) {
  for (var i = 0; i< b.length; i++){
    b[i] == 0 ? b[i] = 1: b[i] = 0
  }
  var zero = b.indexOf(0)
  if (zero == -1){
    var result = b.map(x => x = 0)
    return result
  }
  else{
    var x = 1
    while (b[b.length - x] != 0){
      b[b.length - x] = 0
      x++
    }
    b[b.length -x] = 1
  }
  return b
}
