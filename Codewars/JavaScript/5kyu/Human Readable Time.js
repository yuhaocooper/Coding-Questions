function humanReadable(seconds) {
  var hours = Math.floor(seconds/3600)
  var mins = Math.floor((seconds - (hours*3600)) /60)
  var sec = seconds - (hours*3600) - (mins*60)
  hours = hours > 9 ? hours : "0"+hours
  mins = mins > 9 ? mins : "0"+mins
  sec = sec > 9 ? sec : "0"+sec
  return hours+":"+mins+":"+sec
}
