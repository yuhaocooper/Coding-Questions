function getMinMax(arr){
  var min = Math.min(...arr)
  var max = Math.max(...arr)
  var array = []
  array.push(min)
  array.push(max)
  return array
};
