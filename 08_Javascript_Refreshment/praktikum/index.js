// Soal 1
var a = 5 ;
let b = "kampus merdeka";
let c = ""
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];


function perkenalan (){
    /* Let asal bersifat function scooping, line 31 panggil function*/
    let asal = "indonesia"
    return console.log(
        "perkenalkan nama saya " +
        nama +
        ", nomor urut " +
        a +
        ", sekarang sedang mengikuti "+
        b + 
        ", berasal dari " +
        asal
    )
}

/* Agar ke print, ubah baris 5 boolean tanpa "" */
if(terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

/* a = b */
/* nama = b */

console.log(`array index  ke 2 = ${lengkap_arr[1]}`)
/* bisa juga  */
const select = lengkap_arr[1]
console.log("array index ke 2 = "+ select)

console.log("array = " + lengkap_arr[2])
console.log("a adalah = " + a)
console.log("b adalah = " + b)
perkenalan()

// Soal 2




// Soal 3
const foo = ['Budi', 'Sita', 'Ayu' ];

[a,b,c] = foo;

console.log(a,b,c);

// Soal 4

let bdays = ['10-17', '05-19', '20-19']

let new_bdays= bdays.map (bday => {
    const [first, last] = bday.split('-');

    return `${first}/${last}`;
});

console.log(new_bdays)

// Soal 5
let kali = [1,2,3,4,5,6]

let hasil = kali.map(Element => Element * 2)

console.log(hasil)

// Soal 6
let arr = [1.5, 2.56, 5.1, 12.33]

let new_arr = arr.map(Element => Math.ceil(Element))

console.log(new_arr)