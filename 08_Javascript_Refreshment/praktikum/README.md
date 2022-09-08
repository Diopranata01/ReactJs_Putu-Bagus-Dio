# Praktikum_Putu-Bagus-Dio

## Soal

### 1. Tulis ulang Kode di bawah, dan simpan dengan format javascript
### a. Ambilah index ke-2 dalam array di baris 5 dan tampilka
n dalam console.
### b. Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console.
### c. Lakukan pemanggilan untuk function perkenalan pada baris 31.
### d. Kalian bebas mengubah kode diatas sehinga menampilkan output pada console seperti pada gambar dibawah


### 2. Jawab pertanyaan dibawah sesuai dengan materi yang telah dijelaskan.
### a. Jelaskan kenapa baris 21,22,23 tidak dapat tampil?
### b. Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
### c. Dengan melakukan komen pada baris ke-26, apakah baris 28 dapat di ekeskusi, jelaskan.

### 3. Lakukan desetructuring pada kode di bawah sehingga Budi Tersimpan dalam Variabel bernama a, Sita tersimpan dalam variable bernama b, dan Ayu tersimpan dalam variabel bernama c.

### 4. Kalian memiliki sebuah variable berikut (let bdays=['10-17','05-19','20-19']). Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan keluar dalam konsole menjadi ['10/17','05/19','20/19']

### 5. Kalian memiliki variabel berikut (let value =[1,2,3,4,5,6]. Kalikan seriap value dalam array teserbut dengan dua. Sehingga, ketika dipanggil variabel value mengeluarkan output berupa [2,4,6,8,10,12]

### 6. Kalian memiliki variabel berikut (let arr= [1.5, 2.56, 5.1, 12.33]) Bulatkan ke atas variabel tersebut sehingga output yang dihasilkan adalah [2,3,5,12]

## Jawaban 

1. a. Untuk mengambil index ke-2 dalam array baris ke-5, dapat menggunakan console.log('array ke -2 adalah ' + lengkap_arr[1]), atau dapat seperti berikut console.log(`array index ke-2 ${lengkap_arr[1]}`).

b. Dalam lingkup scooping baris ke 22, penggunaan kondisi boolean untuk melanjutkan kondisi didalamnya, dimana let terdaftar harus bernilai true, hanya dengan mengganti value dari let terdaftar dari awal false, menjadi true.

c. Dengan cara cukup memanggil nama dari function tersebut, yaitu 'perkenalan()', pada baris 31, sbelum memanggil ada baiknya untuk melakukan komen pada baris 26, agar menghasilkan hasil yang sesuai dengan fungsi tersebut.

d. Sama seperti sebelumnya, lakukan komen pada baris 26, dimana nama=b akan menyebabkan error.

![Screenshot](./screenshot/1_Screenshot.png)

2. a. Dikarenakan nilai dari kondisi variabel let terdaftar adalah false, boolean true adalah yang diharapkan untuk melanjutkan scoop pada baris 21,22,23 terlaksanakan.

b. Pada baris 26, nama merupakan sebuah tipe const, tidak dapat di reassign, maka hal tersebut menyebabkan error.

c. Bisa, dikarenakan menghalangi jalanya eksekusi dari program itu sendiri, dengan kendala kondisi variabel const yang tidak dapat di reassign, berbeda dengan var atau let, akan langsung berjalan tanpa error, tetapi mungkin hasil nya tidak akan sesuai dengan yang di inginkan pada soal nomor 1 d.

3. Dengan desctructuring array, variabel foo dengan array Budi, Sita, Ayu string, akan dipisahkan menjadi beberapa variabel dimana Budi pada let a, Sita Let b,  Ayu Let c.

![Screenshot](./screenshot/3_Screenshot.png)

4. Pada soal, perubahan pada string khususnya tanda '-', menggunakan yang namanya method yaitu string_Split, dengan variabel Let new_bdays, bdays akan di map erlebih dahulu, kemudian setiap index pada bday akan dipisahkan pada first dan last variabel di setiap tanda '-', kemudian di ganikan menggunakan rerturn `${first} / ${last}`, dan tanda '-' akan terganti '/'.

![Screenshot](./screenshot/4_Screenshot.png)

5. Soal nomor 5, akan menggunakan method Map, dimana tiap elemnt index array akan di duplikat kemudian di * kali kan 2 masing - masing, sehingga menghasulkan array [2,4,6,8,10,12].

![Screenshot](./screenshot/5_Screenshot.png)

6. Mirip seperti nomor 5, dimana penggunaan method Matchceil(), untuk merubah sebuah angka menuju bilangan bulatnya terdekat dan lebih besar, penggunaan nya hampir mirip secara keseluruhan seperti sebelumnya, tetapi untuk map tiap index array tidak akan dikali 2 seperti sebelumnya, akan dilakukan method Math.ceil() pada element yang di map, kemudian tampilkan dengan console.log.

![Screenshot](./screenshot/6_Screenshot.png)

