# Praktikum_Putu-Bagus-Dio

## Soal

### 1. Membuat Repository pada Github berupa Branch Main default.
### 2. Membuat branch Development (Branch ke-2)
### 3. Membuat branch Development-1 (Branch ke-3)
### 4. Membuat branch Development-2 (Branch ke-4)
### 5. 
###    a. Melakukan Merge pada Development-1 (Branch ke-3) -> branch Development (Branch-2)
###    b. Melakukan Merge pada Development-2 (Branch ke-4) -> branch Development (Branch-2)

## Jawaban

    1. Pembuatan Repository dengan nama newPortof_Web, kemudian branch master (default), kemudian buka folder pada lokal dan lakukan inisialisasi
    dan hubungkan folder dengan Repo Github menggunakan prompt $ git init, dilanjutkan dengan $ git remote add <https>, kemudian lakukan add file 
    pada folder lokal, dan push ke repository Github menggunakan prompt $ git add . , lalu $ git commit -m "<pesan>", dan $ git push origin <branch>
    yaitu "master", dan jadilah branch pertama.

    2. Melakukan pembuatan branch Development, Development-1, dan Development-2, dengan cara sama seperti sebelumnya, setelah melakukan prompt $ git
    branch <nama branch yang ingin dibuat>, check dengan $ git branch, kemudian pindahkan dahulu branch menuju branch yang baru saja dibuat menggunakan
    $ git checkout <branch yang dituju>, lalu harus melakukan add file dengan prompt $ git add <file> terlebih dahulu hingga $ git push origin <branch 
    yang dituju>, barulah branch tersebut akan muncul pada Repo Github.

    5. Setelah tiap - tiap branch sudah berisikan file, kemudian kita lakukan perubahan pertama pada branch develop-1, save change lalu add . hingga
    push. Dilanjutkan dengan perubahaan kedua pada branch develop-2, setelah kedua branch melakukan commit, lakukan merge develop-1, dan develop-2 secara
    bergilir menuju development, dengan cara checkout dahulu branch yang ingin dimerge, kemudian pastikan tidak terdapat status lain pada branch tersebut, 
    lalu gunakan prompt $ git merge <branch> yang dituju, dengan sifat merge fast forward. Selanjutnya lakukan yang sama pada branch develop-2, lakukan check status
    branch tersebut, lakukan merge, dimana dalam merge ini akan melakukan commit baru untuk menggabunggkan ke 2 branch, dan tidak bersifat fast forward.

