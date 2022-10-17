const vp = (v) => v.length === 0;
const vs = (v) => v <= 0;
const o = "Oops! tickets not sold!";
const i = "Invalid number";
const v = (p, s, c) => (vp(p) ? o : vs(s) ? i : c);

const f = (p, s) => {
  const so = [...p.sort()]
  for (let i = 1; i < s; i++){
    if(p.length < s*2 && p.length !== 0) so.push("Seat available");
  }
  return so;
}

const c = (p, s) => f(p,s).length === 10 ? [f(p,s).slice(0,9)] : f(p,s).reduce((r,e,i) => i%s ? (r[r.length-1].push(e), r) : (r.push([e]),r), []), arr = Array.from({length: 31}).map((_,i) => i+1);


module.exports = { v, c, f};
