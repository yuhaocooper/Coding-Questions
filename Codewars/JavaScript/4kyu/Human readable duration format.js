function formatDuration (seconds) {
  var arr = []
  var finalarr = []
  if (seconds <= 0){
    return 'now'
  }
  else{
    var minute = 60
    var hour = 60*60
    var day = 60*60*24
    var year = 60*60*24*365
    var time = [year,day,hour,minute]
    for (var i = 0; i < time.length; i++){
      var temp = seconds/time[i]
      if (temp >0){
        arr.push(Math.trunc(temp))
        var seconds = seconds - (Math.trunc(temp)*time[i])
      }
      else if (temp == 0){
        arr.push(0)
      }
      if (i == time.length -1){
        arr.push(seconds%time[i])
      }
    }
    console.log(arr)
    var timestring = ['year','day','hour','minute','second']
    for (var i = 0; i<arr.length; i++){
      if(arr[i] == 1){
        finalarr.push(arr[i] + ' ' +timestring[i])
      }
      else if (arr[i] > 1){
        finalarr.push(arr[i] + ' '+timestring[i] + 's')
      }
    }
    console.log(finalarr.length)
    console.log(finalarr)
    if (finalarr.length == 1){
      return finalarr.join()
    }
    else if (finalarr.length ==2 ){
      return finalarr.join(' and ')
    }
    else {
      var finalstr = finalarr.join(', ')
      var and = finalstr.lastIndexOf(',')
      var finalstr = finalstr.substring(0,and)
      return finalstr.concat(' and ' + finalarr[finalarr.length-1])
    }
  }
}
