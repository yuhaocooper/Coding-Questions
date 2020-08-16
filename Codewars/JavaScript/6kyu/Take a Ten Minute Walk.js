function isValidWalk(walk) {
  var vcount = 0
  var hcount = 0
  walk.forEach(x => {
    if (x == 'n'){
      vcount++
    }
    else if (x == 's'){
      vcount--
    }
    else if (x == 'e'){
      hcount ++
    }
    else{
      hcount --
    }
  })
  console.log(walk)
  return Math.abs(vcount) + Math.abs(hcount) + walk.length == 10
  
  ----------------------------------------------------------------------------------------------------------------------------------
  //better solutions from others
  
  function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}
  
