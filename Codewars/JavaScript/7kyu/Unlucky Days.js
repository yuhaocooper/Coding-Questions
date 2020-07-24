function unluckyDays(year){
  var d = new Date()
  var count = 0
  for (var i =0; i< 12; i++){
    d.setFullYear(year, i, 13)
    if (d.getDay() == 5){
      count++
    }
  }
  return count
}
