function list(names){
  var array =[]
  for(var key in names){
    var value = names[key]
    for(var key in value){
      var final = value[key]
      console.log(final)
      array.push(final)
    }
  }
  console.log(array.length)
  var string = ''
  array.forEach( (a,b) => { if(b < array.length -2) {string += a + ', '}  else if(b ==array.length -2) {string += a + ' & '} else {string += a}} )
  return string
  return compiled
}
