const nomor3 = require('./nomor3');

// Nomor 1

console.log('Nomor 1 :\n');

var a = 5;
let b = "Kampus Merdeka";
const nama = "Yusril";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

const perkenalan = () => {
  let asal = "indonesia";
  return console.log(`Perkenalkan nama saya ${nama} nomor urut ${a} sedang mengikut ${b} berasal dari ${asal}`);
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kampus merdeka")
}

a = b;

// Soal 1 A : Ambillah index ke 2 dalam array di baris 5 (7 pada file ini) dan tampilkan dalam console
// Jawaban
console.log('\nJawaban 1 A : ');
console.log('Array : ', lengkap_arr[1]);
// ./Jawaban

// Soal 1 B : Ubah kode diatas sehingga dapat menampilkan baris 22 (16 pada file ini) di dalam console
// Jawaban
// Saya telah merubah nilai pada variable terdaftar yang sebelumnya false menjadi true;
// ./Jawaban

// Soal 1 C : Lakukan pemanggilan untuk function perkenalan pada baris 31
// Jawaban
console.log('\nJawaban 1 C : ');
perkenalan();
// ./Jawaban

// Soal 1 D : Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar di bawah
// Jawaban
console.log('\nJawaban 1 D : ');
console.log(`Array : ${lengkap_arr[1]}`);
console.log(`a adalah ${a}`);
console.log(`b adalah ${b}`);
perkenalan();
// ./Jawaban

//  ./Nomor 1





console.log('\n');

// Nomor 2

// Soal 2 A: jelaskan kenapa baris 21,22,23 tidak dapat tampil?
// Jawaban : Karena kita memberikan nilai false pada variable terdaftar, sedangkan pada line 22 kita berikan condition apabila variable terdaftar bernilai true maka jalankan perintah pada line 23.


// Soal 2 B: jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
// Jawaban : Karena kita mencoba melakukan penginisialisasi nilai ulang pada variable nama, padahal pada line 3 variable nama kita inisialisasi dengan const, dimana const tidak dapat dirubah nilainya.

// Soal 2 C: Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? jelaskan.
// Jawaban : Tidak bisa, karena variable asal berada pada posisi function scope pada line 8. Sehingga tidak bisa dipanggil diluar function perkenalan().

// ./Nomor 2





// Nomor 3
// Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a, Sita tersimpan dalam variabel bernama b, dan Ayutersimpan dalam variable bernama c. 

// Jawaban
console.log('Nomor 3 :');
nomor3();
// ./Jawaban

// ./Nomor 3





console.log('\n');

// Nomor 4
// Kalian memiliki sebuah variabel berikut (let bdays = ['10-17','05-19','20-19']). Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi [ '10/17', '05/19', '20/19' ]

// Jawaban
console.log('Nomor 4 :');
let bdays = ['10-17','05-19','20-19'];

const formatedBdays = bdays.map((bDay) => (
  bDay.replace('-', '/')
));

console.log(formatedBdays);
// ./Jawaban

// ./Nomor 4





console.log('\n');

// Nomor 5
// Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap value dalam array tersebut dengan dua. Sehingga, ketika dipanggil variable value mengeluarkan output berupa [ 2, 4, 6, 8, 10, 12 ]

// Jawaban
console.log('Nomor 5 :');
let value = [1,2,3,4,5,6];

const formatedValue = value.map((val) => (val * 2));

console.log(formatedValue);
// ./Jawaban

// ./Nomor 5





console.log('\n');

// Nomor 6
// Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1, 12.33]) Bulatkan ke atas variable tersebut sehingga output yang dihasilkan adalah [ 2, 3, 6, 13 ]

// Jawaban
console.log('Nomor 6 :');
let arr = [1.5, 2.56,5.1, 12.33];

const formatedArr = arr.map((val) => (Math.ceil(val)));

console.log(formatedArr);
// ./Jawaban

// ./Nomor 6
