# Relational_Database

## Resume
Pada materi ini, mempelajari tentang beberapa hal berikut :
1. Pengenalan pada hasura relational database.
2. Bagaimana melakukan relasi pada hasura database. 
3. Serta menggunakan untuk menampilkan relasi tersebut.

### Penjelasan
1. Pada Materi ini, saya telah belajar mengenai bagaimana membuat relasi sebuah database pada hasura, dilanjutkan dengan melakukan query untuk melihat apakah relasi pada database sudah benar atau belum. Contoh seperti merelasikan database anggota, dengan keterangan, kemudian kita ingin melihat apakah nama anggota sudah memiliki sebuah mata pelajaran yang sesuai dengan tabel keterangan, melalui sebuah anggota_id.

2. Kemudian melakukan insert data menggunakan conflict, seperti praktikum sebelumnya, agar anggota yang bernama angga memiliki sebuah input baru, yaitu seperti anggota_id, pelajaran, nilai, dan status. 

3. Setelah itu, dilakukan query untuk melihat kembali isi data yang sudah direlasikan, apakah sesuai dengan relasi atau tidak. Tidak lupa penggunaan foreign keys dalam melakukan relational, dimana foreign key berguna untuk memberikan sebuah refrensi, dan kita tidak perlu melakukan relation secara manual pada menu relationship, cukup dengan hanya menekan button add, dan apakah schema yang nya sudah sesuai dengan relasi yang ingin kita buat, seperti one to one, akan bersifat sebuah "Object Relationships", sedangkan untuk one to many, bersifat sebuah "Array Relationship".

## Berikut hasil dari source code tersebut. 
![Screenshot](../screenshot/Screenshot-Soal-OneToOneUser.png)
![Screenshot](../screenshot/Screenshot-Soal-OneToManyKeterangan.png)