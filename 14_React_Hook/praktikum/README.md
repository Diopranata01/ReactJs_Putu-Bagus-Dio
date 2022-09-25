# Praktikum_Putu-Bagus-Dio

## Soal

### Ubah Class Component pada assignment sebelumnya menjadi Function Component. Sekaligus ubah lifecycle method & state management menggunakan React Hooks.

## Jawab

### 1. Pada assignment kali ini, memiliki kesamaan seperti assigment sebelumnya, dimana perbedaan yang signifikan adalah pada penggunaan Component, jika sebelumnya menggunakan Classs Component, maka saya akan mengubahnya menjadi Function Component. Pada Class Component, menggunakan class kemudian sebuah constructor serta extend untuk component nya, kemudian penggunaan this. untuk memanggil sebuah state, kemudian dalam Usestate terdapat fungsi pembaruan biasa disebut dengan setter, penggunaan Class Component akan memanggil this.state.count, dilanjutkan dengan penggunaan state dalam function komponen akan lebih dimudahkan dibandingkan dengan Class Component, penggunaan destructuring juga lebih membantu dalam penulisan State.

### 2. Kemudian penggunaan component lifecycle pada Function Component, seperti useEffect, dimana state ini akan dijalankan sesuai dengan render yang terjadi pada component tersebut, seperti saat penggunaan useState dengan variabel conts [toDo, setTodos], jika toDo di render maka useEffect akan mengikutinya dengan hasil masing - masing, biasanya useEffect digunakan untuk data fetch, berupa sebuah JSON ataupun Rest API, dan dapat di set akan mengikuti suatu instruksi, jika nilai instruksi tersebut bernilai true maka akan dijalankan, meskipun component sedang melakukan render, hanya dengan menggunakan sebuah [] pada akhir useEffect untuk mengikuti instruksi tersebut tanpa memperdulikan render component, ataupun state lain yang sedang dijalankan atau eksekusi. Pada assignment kali ini, saya menggunakan sebuah component lifecycle sebuah useEffect untuk menampilkan alert jika inputan pada useState sudah berjalan, dan jika toDo.length + 1, tetapi fungsi tersebut belum berjalan maksimal dan mungkin ada cara lebih sederhana, terimakasih.

![Screenshot](../screenshot/1_Screenshot.png)