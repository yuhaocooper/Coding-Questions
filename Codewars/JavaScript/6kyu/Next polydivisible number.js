var p=[0n],v=[1n,2n,3n,4n,5n,6n,7n,8n,9n];
while(v.length) {
  p.push(...v);
  v=[].concat(...v.map(n=>[...'0123456789'].map(d=>BigInt(n+d)).filter(n=>n%BigInt((n+'').length)===0n)));
  console.log(v)
}
function next(n) {
  let [l,r] = [0,p.length];
  while(r-l>1) {
    let m=(l+r)>>1;
    p[m]>n?(r=m):(l=m);
  }
  console.log(r)
  return p[r]||null;
}
