multiplicationTable = function(size) {
  var temp = []
  var ans = []
  for (var i = 1; i<=size; i++){
    for (var x = 1; x<=size; x++){
      temp.push(x*i)
    }
    ans.push(temp)
    temp = []
  }
  return ans
}
