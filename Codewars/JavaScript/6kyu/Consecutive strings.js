function longestConsec(strarr, k) {
  var n = strarr.length
  var arr = []
  if (n == 0 || k> n || k <=0){
    return ''
  }
  else{
    var lengtharray = strarr.map( a => a.length)
    console.log(lengtharray)
    for (var x = 0; x < lengtharray.length; x++){
      var totallength = lengtharray.slice(x,k+x).reduce((a,b) => a+b)
      arr.push(totallength)
      console.log(totallength)
    }
    console.log(arr)
    var indexmax = arr.indexOf(Math.max(...arr))
    console.log(strarr)
    console.log(indexmax)
    return strarr.slice(indexmax,indexmax+k).toString().replace(/,/g,'')
  }
}
