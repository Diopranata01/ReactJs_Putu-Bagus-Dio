# Praktikum_Putu-Bagus-Dio
# React Form

## Soal

### Buatlah sebuah formulir yang berjudul "Pendaftaran Peserta Coding Bootcamp", Form perndaftaran tersebut memiliki ketentuan sebagai berikut :
### - Input field "Nama" lengkap wajib, hanya menerima huruf saja
### - Inmput field "Email" wajib
### - Inmput field "No. Handphone" wajib, panjangnya 9 - 14 karakter, berupa angka
### - Input field "Latar Belakang Pendidikan" wajib, berupa sebuah radio button dengan pilihan IT dan Non IT
### - Input field "Kelas Koding yang Dipilih" wajib, pilihan nya ada 3 yakni :
#### 1. Coding Backend with Golang
#### 2. Coding FrontEnd with ReactJS
#### 3. Fullstack Developer
### - Inut field "Foto Surat Kesungguhan" bersifat wajib.
### - Input field "Harapan Untuk Coding Bootcamp Ini" bersifat opsional.
### - Tombol "Submit" untuk mensubmit data dan mereset form, bersifat wajib.
### - Tombol "Reset" untuk mereset form dan mereset pesan errot, bersifat tidak wajib.


### Untuk error ditampilkan di antara form dan tombol submit. Ketika tombol submit ditekan, akan muncul alert baik ketika ada eror maupun saat data benar. Utamakan fungsionalitasnya. Kerapihan dan inovasi menjadi suatu nilai tambah.


## Jawab

### 1. Pada soal ini, poin pertama adalah membuat sebuah komponen form, yang didalamnya berisikan sebuah input, baik berupa text dan non-text. Disini saya menggunakan beberapa input selain text, yaitu radio, select, dan check. Isi dari source code adalah pertama pada app.js, akan berisikan sebuah MainContent component, dimana didalam MainContent component berisikan sebuah IniForm component, kemudian deklaraasi sebuah useState variabel [newData, setNewData], dengan assigment data awal diambil dari komponen DataSet, yang berisikan id, name, username, email, nomor, latbel, kelasCoding, file, harapan, berisikan string kosong '', dan checkSetuju dengan boolean. Kemudian didalam komponen IniForm, kita assign nilai dari useState, kedalam IniForm, dan kita gunakan props, bisa saja langsung menggunakan type apa yg ingin di lempar, tetapi kali ini menggunakan props. 

### 2. Kemudian, pada IniForm, berisikan function komponen, dengan function dan komponen untuk menampilkan input field form, langsung saja membahas field input, terdiri dari 9 input, dengan (Nama Lengkap, Username, Email, No. Handphone, Harapan) berupa input text, dan texarea, tiap input berisikan value, nama placeholder, dan fungsi onChange, value di set dengan isi dari 'newData.<'sesuai data awal'>' agar komponen menjadi lebih stabil dan tertuju pada state tertentu, kemudian fungsi onChange untuk cek perubahan didalam input, dengan menggunakan fungsiChange untuk melakukan perubahan (render) pada dom dan terlihat pada console, memudahkan untuk update sebuah data, kemudian pattern akan mengecek ketentuan sesuai 'Regular Expression' dalam Javascript, dimana pada pattern dan required akan mengecek perubahan yg terjadi didalam input, apakah bersifat valid atau tidak, jika bersifat valid maka span dibawah input akan menghilang, jika sebaliknya akan muncul, pada fungsiChange, params diambil kemudian params sesuai target saat ini, akan di assign sebagai object name, value, type, dan checked, destructuring mempermudah penulisan, lalu akan merubah setNewData dimana copy newData sebelumnya yang bersifat '', akan di assign sesuai name, dan di cek apakah type dari target saat ini, yaitu input name, type nya adalah sebuah checkbox, jika benar maka assign ditunjukan pada checked, jika sebaliknya akan ke value. Kemudian (Latar Belakang Pendidikan, Kelas Pilihan, Foto Surat, dan Setuju) merupakan input berupa radio, option, file, dan checkbox, sama seperti input type lainnya, dengan name sesuai DataSet, berbeda dengan input text lain, value akan berupa isi yang ingin di assign berupa string, dan bukan sebuah controled component, untuk radio input bisa menjadi sebuah controled component, jika memberikan fungsi checked, dan mengecek value yang di masukan pada fungsiChange, apakah sesuai dengan sebuah string seperti yang diinginkan atau tidak. Pada input file, akan menggunakan useRef sebagai inputan, dengan menunjuk ref = inputFile variabel, maka useRef bersifat null akan berisikan value dari file yang dipilih, setelah onSubmit.

### 3. Terakhir, pada submit button, akan mentrigger fungsi onSubmit pada form, dan menjalankan submitHandler, dengan params sebuah evemt yaiu onSubmit, akan di cek dahulu jika newData dan inputFile true, maka deklarasi deleteVar dengan object kosong, alert di berikan dengan mereffer isi dari newData.name yang sudah di assign, kemudian setNewData akan berisikan value baru newData, adalah deleteVar, dan mencegah reload setelah click submit, maka otomatis newData akan kembali seperti semula.

## Berikut hasil dari source code tersebut. 
![Screenshot](./Screenshot_name_1.png)
![Screenshot](./Screenshot_name_2.png)
![Screenshot](./Screenshot_uName_1.png)
![Screenshot](./Screenshot_uName_2.png)
![Screenshot](./Screenshot_email_1.png)
![Screenshot](./Screenshot_email_2.png)
![Screenshot](./Screenshot_nomor_1.png)
![Screenshot](./Screenshot_nomor_2.png)
![Screenshot](./Screenshot_program_1.png)
![Screenshot](./Screenshot_program_2.png)
![Screenshot](./Screenshot_latbel_1.png)
![Screenshot](./Screenshot_latbel_2.png)
![Screenshot](./Screenshot_notifSubmit_1.png)
![Screenshot](./Screenshot_hasilSubmit_1.png)
![Screenshot](./Screenshot_dataReset_1.png)
