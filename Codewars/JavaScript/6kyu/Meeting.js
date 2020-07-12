function meeting(s) {
    var final = []
    var str = s.toUpperCase()
    var arr = str.split(";")
    for (var i = 0; i<arr.length; i++){
      var sarr = arr[i].split(':')
      var full = '(' + sarr[1] + ', ' + sarr[0] + ')'
      final.push(full)
    }
    final.sort().toString()
    var finalstr = final.join('')
    return finalstr
}
