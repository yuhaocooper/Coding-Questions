function loneliest(number) {
  var arr = number.toString().split('').map(x => +x)
  var lonelinessarr = []
  var onearr = []
  //Find loneliness of each number
  for (var x = 0; x<arr.length;x++){
    var value = arr[x] //it is in number format
    if (x - value < 0){
      var start = 0
      }
    else {
      var start = x - parseInt(value)
      }
    if ( x + value > arr.length){
      var end = arr.length
      }
    else {
      var end = x + parseInt(value) + 1
      }
    var temp = arr.slice(start,end)
    var total = temp.reduce( (a,b) => a+b) - value
    if ( value != 1){
      lonelinessarr.push(total)
    }
    else {
      onearr.push(total)
    }
  }
  if (onearr.length == 0){
    return false
  }
  else if ( Math.min(...lonelinessarr) >= Math.min(...onearr) ){
    return true
  }
  else {
    return false
  }
}
