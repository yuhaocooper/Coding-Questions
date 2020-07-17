function solve(arr){
  var temp = arr.map( (x,i) => {if (arr.lastIndexOf(x) != i){return -1}else{return x}   })
  var result = temp.filter(x => x>-1)
  return result
}
