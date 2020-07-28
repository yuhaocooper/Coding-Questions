function findOutlier(integers){
  var even = integers.filter(int => int %2 == 0)
  var odd = integers.filter(int => int %2 != 0)
  return even.length == 1 ? even[0] : odd[0]
}
