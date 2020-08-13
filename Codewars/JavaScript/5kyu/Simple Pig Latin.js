function pigIt(str){
  var arr = str.split(' ')
  var regex = /[.!?\\-]/
  const ans = arr.map(x => {
    if (regex.test(x)) return x
    var temp = x.split('')
    temp.push(temp.shift() + 'ay')
    return temp.join('')
  })
  return ans.join(' ')
}
