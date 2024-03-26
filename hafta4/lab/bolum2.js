// x al 2 kat dondur
// ciftse boolen tanımlak

const iki_kat = (x) => x * 2;

console.log(iki_kat(5));

const cift_mi = (x) => (x % 2 == 0 ? "cift" : "tek");
const tek_mi = (num) => num % 2 === 0;

console.log(cift_mi(10));
console.log(tek_mi(5));
