function nextId(ids){
  var count = 0
  while (count < ids.length){
    if (ids.filter(num => num == count).length == 0) return count
    count++
  }
  return count
}
