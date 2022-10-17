const sh = 20000;
const ch = 50000;
const js = 20;
const jh = 30;
const ds = 0.2;
const dh = 0.25;
const travelDiscount = (t, s) =>
  t.includes("STD") && s <= js
    ? `Selamat! Voucher untuk STUDENT dengan id ${t} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${
        sh * s
      }.`
    : t.includes("STD") && s >= js
    ? `Selamat! Voucher untuk STUDENT dengan id ${t} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${
        sh * s - ds * sh * s
      }.`
    : t.includes("CORP") && s <= jh
    ? `Selamat! Voucher untuk CORPORATE dengan id ${t} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${
        ch * s
      }.`
    : t.includes("CORP") && s >= jh
    ? `Selamat! Voucher untuk CORPORATE dengan id ${t} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${
        ch * s - dh * ch * s
      }.`
    : `Maaf, voucher yang anda miliki tidak valid!`;

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
