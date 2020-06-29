function accum(s) {
  var sarr = s.split('')
  const Sarr = sarr.map( (character, i) => {
    return character.toUpperCase() + character.toLowerCase().repeat(i)
  })
  return Sarr.join("-")
}
