function tvRemote(words) {
  let keys = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/';
  let Upperkeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let pos = [ 0, 0 ];
  let res = 0;
  let state = 0;
  
  for (let char of words) {
    
    let i = keys.indexOf(char);
    let x = Upperkeys.indexOf(char);
    if (char == ' '){
      let dest = [5,1]
      res += Math.abs(dest[0] - pos[0]) + Math.abs(dest[1] - pos[1]) + 1;
      pos = dest
    }
    else if (i != -1 && state == 0){
      let dest  = [ i / 8 | 0, i % 8 ];
      res  += Math.abs(dest[0] - pos[0]) + Math.abs(dest[1] - pos[1]) + 1;
      pos = dest;
    }
    else if (i != -1 && state ==1){
      let dest = [i/8 | 0, i% 8];
      if (dest[1] == 5 && dest[0] == 4){
        let dest1 = [5,0]
        res += Math.abs(dest1[0] - pos[0]) + Math.abs(dest1[1] - pos[1]) + 1;
        res += Math.abs(dest[0] - dest1[0]) + Math.abs(dest[1] - dest1[1]) + 1;
        pos = dest
        state = 0
      }
      else if (dest[1] > 4) {
        res += Math.abs(dest[0] - pos[0]) + Math.abs(dest[1] - pos[1]) + 1
        pos = dest
      }
      else{
      let dest = [5,0]
      res += Math.abs(dest[0] - pos[0]) + Math.abs(dest[1] - pos[1]) + 1
      let dest1 = [i/8 | 0, i% 8];
      res += Math.abs(dest1[0] - dest[0]) + Math.abs(dest1[1] - dest[1]) +1
      pos = dest1
      state = 0
      }
    }
    else if (state == 0 && i == -1) { //Uppercase
      let dest = [5,0]
      res += Math.abs(dest[0] - pos[0]) + Math.abs(dest[1] - pos[1]) + 1;
      let dest1 = [x/5 | 0, x% 5]
      if ( dest1[0] == 5 && dest1[1] == 0){
        dest1 = [4,5]
      }
      res += Math.abs(dest1[0] - dest[0]) + Math.abs(dest1[1] - dest[1]) + 1;
      pos = dest1
      state = 1
    }
    else if(state == 1 && i == -1){
      let dest = [x/5 |0, x%5]
      if ( dest[0] == 5 && dest[1] == 00){
          dest = [4,5]
      }
      res += Math.abs(dest[0] - pos[0]) + Math.abs(dest[1] - pos[1]) + 1;
      pos = dest
      state = 1
    }
  }
  return res;
}
