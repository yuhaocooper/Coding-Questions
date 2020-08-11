function squareDigits(num){
  var arr = num.toString().split('')
  return parseInt(arr.map(x =>  x*x ).join(''))
}
