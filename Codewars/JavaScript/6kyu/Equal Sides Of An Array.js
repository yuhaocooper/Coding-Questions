function findEvenIndex(arr)
{
  var left = 0
  for (var i = 0; i<arr.length; i++){
    var right = arr.slice(i,arr.length).reduce((a,b)=> a+b)
    left += Number(arr.slice(i,i+1))
    if (right == left) return i
  }
  return -1
}
