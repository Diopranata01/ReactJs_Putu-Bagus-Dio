// Soal
var a = 5 ;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = "false";
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan (){
    /* Let asal bersifat function scooping, untuk line 31 harus di panggil functionya */
    let asal = "indonesia"
    return console.log(
        "perkenalkan nama saya" +
        nama +
        "nomor urut" +
        a +
        "sekarang sedang mengikuti "+
        b + 
        "berasal dari " +
        asal
    )
}

if(terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}


a = b
/* nama = b */

console.log("asal diakses = " + asal)
console.log("a adalah = " + a)
console.log("b adalah = " + b)


// Jawaban

/* 1. a. 
let lengkap_arr = [10,2,3]

const select = lengkap_arr[1]
console.log(select) */

/* 1. b. 
const nama = "Budi";
let terdaftar = "true";

if(terdaftar = true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

 */
