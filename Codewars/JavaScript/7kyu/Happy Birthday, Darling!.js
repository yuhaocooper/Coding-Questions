function womensAge(n) {
  if (n%2 != 0){
    var base = Math.trunc(n/2).toString()
    return n+'? That\'s just 2'+(n%2)+', in base '+base+'!'
  }
  else{
    var base = Math.trunc(n/2).toString()
    return n+'? That\'s just 20, in base '+base+'!'
  }
}
