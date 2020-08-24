function cleanString(s) {
	var arr = s.split('')
  var result = []
  arr.forEach(x => {
    if (x == '#'){result.pop()}
    else {result.push(x)}
  })
  return result.join('')
}
