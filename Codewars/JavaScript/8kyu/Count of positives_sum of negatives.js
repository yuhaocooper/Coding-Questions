function countPositivesSumNegatives(input) {
  var array = []
  var negativesum = 0
  if (input == null){
    return array
  }
  else if (input.length > 0){
    var i = 0
    var count = 0
    for (i = 0; i< input.length; i++){
      if (input[i] > 0){
        count++
      }
      else {
        negativesum += input[i]
      }
    }
    array.push(count,negativesum)
    return array;
  }
  else{
    return array
  }
}
