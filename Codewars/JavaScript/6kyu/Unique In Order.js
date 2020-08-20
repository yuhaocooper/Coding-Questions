var uniqueInOrder=function(iterable){
  var arr = []
  for (var i = 0; i< iterable.length; i++){
    if (arr[arr.length - 1] != iterable[i]){
      arr.push(iterable[i])
    }
  }
  return arr
}
