function order(words){
  if (words == '') return ''
  var arr = words.split(' ')
  var obj = new Object()
  var regex = /\d/
  arr.forEach(x => {
    var num = x.match(regex)
    obj[num] = x
  })
  return Object.values(obj).join(' ')
}

---------------------------------------------------------------------------------------------------------

function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    
