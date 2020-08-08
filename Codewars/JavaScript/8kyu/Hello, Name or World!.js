function hello(name) {
  if (name == undefined || name == '') return 'Hello, World!'
  var final = name.split('').map( (x,index) => {
    if (index == 0){
      return x.toUpperCase()
    }
    return x.toLowerCase()
  })
   return 'Hello, ' + final.join('') + '!'
}
