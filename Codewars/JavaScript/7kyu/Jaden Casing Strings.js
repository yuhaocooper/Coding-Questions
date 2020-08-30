String.prototype.toJadenCase = function () {
  return this.valueOf().split(' ').map(x => {
    return x.charAt(0).toUpperCase() + x.slice(1)
  }).join(' ')
};
