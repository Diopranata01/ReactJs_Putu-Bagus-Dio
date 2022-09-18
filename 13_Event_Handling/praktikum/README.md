# Praktikum_Putu-Bagus-Dio

## Soal

### Buatlah daftar pekerjaan yang akan kamu kerjakan, dengan kriteria sebagai berikut :
### 1. Daftar pekerjaan dapat ditambahkan menggunakan inputan.
### 2. Terdapat checklist pada setiap daftar pekerjaan
### 3. Aktifkan chekslit jika pekerjaan selesai dikerjakan, seperti contoh dibawah
### 4. Sertakan tombol hapus untuk menghapus suatu pekerjaan dari daftar pekerjaan.
### 5. Apabila inputan yang anda submit tersebut kosong, tampilkan alert bahwa anda harus mengisi inputan tersebut terlebih dahulu sebelum anda submit

## Jawab

### 1. Pada soal nomor 1, poin pertama akan membuat sebuah tampilan serta fungsi untuk memasukan input user, dengan useState, dengan params toDo, kemudian setToDo, dan terdapat object data didalamnya. Kemudian terdapat var const temp, digunakan untuk sementara, kemudian dimasukan kedalam toDO melalui setToDo, dan untuk alurnya, user input dan dimasukan kedalam <Input/>, value akan == newTask, dengan onChange, setNewTask akan diisikan input, kemudian button onClick menjalankan function addTask. Dalam function addTask, tidak terdapat argumen, dan jika kondisi var temp newTask terisi, lakukan penambahan index panjang pada toDo (+1), buat object baru, dan masukan kedalam setToDo, dimana toDo akan di copy, dan newItems dimasukan, kosongkan var temp setNewTask.

### 2. Soal nomor 2, tampilkan daftar pekerjaan dan tiap - tiap daftar tersebut berisikan checklist, dengan alur sebagai berikut, dimana logika sebelum menampilkan daftar, akan menmeriksa daftar checklist pada toDo, jika tidak terdapat panjang pada toDo, maka akan tampilkan string "Belum ada task...". Dilanjutkan dengan jika toDo sama dengan toDo (berisi), isi dari toDo di map, kemudian menggunakan argumen task, dan index, dilanjutkan dengan react.fragment dengan key task.id untuk menampilkan sesuai urut index id. 

### 3. Menampilkan checklist kemudian jika checklist onClick, markDoneTask dijalankan dengan argumen task.id sesuai index, dan dalam function markDoneTask, argument id digunakan dan create var newTask, dimana toDo di map, kemudian task.id apakah sama dengan id yang di pass, jika iya maka akan return copy task, kemudian status akan diubah (tidak samadengan) status sekarang pada id tersebut, kemudian task akan di return, dan setToDo akan berisikan newTask. Setelah status di ubah, dilakukan pengecekan pada classname dimana jika task status pada toDo samadengan true, maka akan terdefinisikan class 'done fst-italic', dan dilanjutkan dengan menampilkan taskIndex, dimana index+1 untuk memunculkan index, kemudian task.title pada index tersebut, dan akan menampilkan icon 'pen' jika status false (belum tercoret), dan memunculkan delete icon.

### 4. Soal Nomor 4, menampilkan tombol delete menggunakan button, kemudian menggunakan fungsi deleteTask dengan param task.id pada toDo, dimana fungsi deleteTask akan memiliki id argumen yang di pass, kemudian let newTask berisikan toDo.filter, dimana task.id akan di filter jika task.id tidak sama dengan id, maka akan di print dan setToDo akan berisikan nilai newTask.

### 5. Untuk soal nomor 5, saat user sudah melakukan input dengan mengklick button, kemudian menjalankan fungsi addTask, pada fungsi addTask memastikan bahwa jika newTask === true atau berisikan, maka akan melanjutkan fungsi addTask, hingga memasukan value newItems ke toDo. Jika tidak maka akan menampilkan alert dengan isi 'Silahkan isi terlebih dahulu'.

![Screenshot](../screenshot/1_Screenshot.png)