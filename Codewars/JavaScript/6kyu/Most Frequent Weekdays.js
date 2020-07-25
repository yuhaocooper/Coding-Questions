function mostFrequentDays(year){
  var d = new Date()
  d.setFullYear(year,0,1)
  if (year % 4 == 0){
    switch (d.getDay()){
     case 0:
        return ['Monday', 'Sunday']
      case 1:
        return ['Monday', 'Tuesday']
      case 2:
        return ['Tuesday', 'Wednesday']
      case 3:
        return ['Wednesday', 'Thursday']
      case 4:
        return ['Thursday', 'Friday']
      case 5:
        return ['Friday', 'Saturday']
      case 6:
        return ['Saturday', 'Sunday']
    }
  }
  else{
    switch (d.getDay()){
      case 0:
        return ['Sunday']
      case 1:
        return ['Monday']
      case 2:
        return ['Tuesday']
      case 3:
        return ['Wednesday']
      case 4:
        return ['Thursday']
      case 5:
        return ['Friday']
      case 6:
        return ['Saturday']
      }
  }
}
