# Praktikum_Putu-Bagus-Dio
# React Global State Management REDUX

## Soal

### Tambahkan Redux dan Redux-persist pada assignment sebelumnya.


## Jawab

### 1. Pada assigment sebelumnya, telah membuat sebuah todo app menggunakan hooks, dimana sudah disampaikan sebelumnya untuk penjelasan fitur dan source code nya. Untuk menambahkan redux dan redux persist, harus melakukan beberapa hal terlebih dahulu, seperti menginstall react-redux kemudian redux-toolkit, untuk menggunakan createslice untuk initial state dari reducer yang ingin dibuat. Sama seperti penggunaan hook sebelumnya, initialstate berisikan data dari initialValue dengan dataValue sebagai variabel penampung, kemudian import createSlice dan gunakan pada slice redux, yang berisikan nama:'dataval', lalu reducers berisikan fungsi yang disimpan seperti hapusDaftar, tambahDaftar, markerDone, dimana state dan action menjadi params, state untuk akses initvalues dan merubahnya baik delete maupun update, dan action untuk parameter yang di berikan dari dispatch dari fungsi, setelah import nama fungsi dari slice, untuk menampilkan data dari intialValue, menggunakan useSelector, berisikan parameter dari sebuah state.<'name dari state'>.<'data dari initstate>, dan dengan begitu dapat memunculkan data pada dataSlice dengan menggunakan map,


### 2. Kemudian membuat store, dengan import sliceData berisikan initstate sebelumnya, dan tidak lupa untuk menginstall react redux-persist, dengan combine reducer, akan berisikan name dari dataSlice, kemudian persistConfig berisikan default yaitu key root dan storage karna kita ingin menyimpannya dalam local storage dan dapat terlihat di inspect element, persistedReducer berisi persistReducer yang didalamnya berisi persisConfig dan reducers pada datasSlice. Selanjutnya membuat store yang nantinya akan ditunjukan kepada aplikasi kita di app.js, dan store berisikan configureStore, yang didalamnya terdapat reducer dan persistConfig berisi key dan storage, dan persistStore juga sama akan digunakan dalam aplikasi kita selain store.


### 3. Mengubah InputUser, dimana menggunakan temp state pada inputan user, kemudian passSubmit untuk memasukan data yang diterima, menuju tambahDaftar pada dataSlice menggunakan useDispatch.


## Berikut hasil dari source code tersebut. 
![Screenshot](./Screenshot_1.png)
![Screenshot](./Screenshot_2.png)
