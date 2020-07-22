function fakeBin(x){
  return x.split('').map((i) => i >= 5 ? 1: 0).join('')
}
