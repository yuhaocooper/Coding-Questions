function duplicateEncode(word){
  var arr = word.toLowerCase().split('')
  const ans = arr.map(x => {
    return arr.filter(y=> y ==x).length > 1 ? ")" : "("
  })
  return ans.join('')
}
