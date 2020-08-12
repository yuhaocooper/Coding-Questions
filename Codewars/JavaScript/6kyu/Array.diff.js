function arrayDiff(a, b) {
  var ans = a
  b.forEach(num => {
    ans = ans.filter(x => x != num)
  })
  return ans
}
