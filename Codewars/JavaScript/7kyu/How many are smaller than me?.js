function smaller(arr) {
  var result = []
  for (var i =0 ; i<arr.length; i++){
    result.push(arr.slice(i+1).filter(x => x < arr[i]).length)
   }
  return result
}
