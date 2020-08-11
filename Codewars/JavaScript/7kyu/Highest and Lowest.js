function highAndLow(numbers){
  var arr = numbers.split(' ')
  var max = Math.max(...arr)
  var min = Math.min(...arr)
  return `${max} ${min}`
}
