function solve(str){
  var space = []
  str.split('').forEach( (x, index) => {
    if (x == ' '){
      space.push(index)
    }
  })
  var rvs = str.split('').reverse().filter(x => x!= ' ')
  for (var i = 0; i< space.length; i++){
    rvs.splice(space[i],0," ")
  }
  return rvs.join('')
}
