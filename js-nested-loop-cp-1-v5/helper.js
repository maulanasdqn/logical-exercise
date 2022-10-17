const Helper = {
  r: (x, y) => parseInt(x) + parseInt(y),
  m: (b) => b.split(","),
  g: (b) => b.split(":"),
  fn: (b) => m(b).map((x) => g(x)[0]),
  fb: (b) =>
    m(b)
      .map((x) => g(x)[1])
      .reduce(r, 0),
  cfb: (b, u) => m(b, u).map((x, y, z) => (z[y] > u ? z[y] : x)),
  j: (b, u) => u - fb(b),
  c1: (b, u) => j(b, u) < 0,
  c2: (b, u) => fb(b, u) < u,
  rf: (u) =>
    `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${u}.`,
  rs: (b, u) =>
    `Afista membeli ${fn(b).length} buku yaitu ${fn(b).join(
      ", "
    )}. Total belanja ${fb(b)}, sisa uang Afista adalah ${j(b, u)}.`,
};

module.exports = Helper;
