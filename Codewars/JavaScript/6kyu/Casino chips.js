function solve(arr){
  var count = 0
  var temp = arr.sort((a,b) => b-a)
  if (temp[2] + temp[1] <= temp[0]){
    return temp[2] + temp[1]
  }
  else{
    var diff = temp[0] - temp[1]
    temp[0] = temp[0] - diff
    return (Math.floor((temp[2]-diff)/2) + temp[0] + diff)
  }
}
