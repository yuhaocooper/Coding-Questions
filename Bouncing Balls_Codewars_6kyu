function bouncingBall(h,  bounce,  window) {
  var count = 0
  if (bounce < 1 && h > 0 && bounce > 0 && window < h) {
    var i = 0
    for (i = 1; i< 100 ; i++){
      var bounceheight = Math.pow(bounce,i) * h
      if (bounceheight > window) {
        count+=2
      }
      continue
    }
    return count + 1
  }
  else {
    return -1
  }
}
