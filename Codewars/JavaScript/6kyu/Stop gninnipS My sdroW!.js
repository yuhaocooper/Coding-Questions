function spinWords(){
  var arr = arguments[0].split(' ')
  return arr.map(x => {
    if (x.length >= 5){
      var temp = x.split('')
      temp.reverse()
      return x = temp.join('')
    }
    return x
  }).join(' ')
}
