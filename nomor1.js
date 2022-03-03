var a = 5;
let b = "Kampus Merdeka";
const nama = "Yusril";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

const perkenalan = () => {
  let asal = "indonesia";
  return console.log(`Perkenalkan nama saya ${nama} nomor urut ${a} sedang mengikut ${b} berasal dari ${asal}`);
}

terdaftar = true;
if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kampus merdeka")
}

a = b;

console.log(`Array : ${lengkap_arr[1]}`);
console.log(`a adalah ${a}`);
console.log(`b adalah ${b}`);
perkenalan();