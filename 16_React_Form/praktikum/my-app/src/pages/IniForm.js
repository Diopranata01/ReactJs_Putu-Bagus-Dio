import React from 'react'

const IniForm = () => {
  return (
    <>
        <div className='container ini-form d-flex justify-content-center align-items-center
        flex-column'>
            <div className='header-form m-5'>
                <div className='row '>
                    <h1> Ini judul</h1>
                </div>
            </div>
            <div className='body-iniform'>
                <div className='row row-iniform ps-auto '>
                    <label>
                        <p>Nama Lengkap</p>
                        <input name='name' ></input>
                        <p>Email</p>
                        <input name='email' type="email"></input>
                        <p>No. Handphone</p>
                        <input name='Nomor'></input>
                        <p>Latar Belakang Pendidikan</p>
                            <input name='Latbel' type="radio"/>IT
                            <input name='Latbel' type="radio"/>Non IT
                        <p>Kelas Koding yang Dipilih</p>
                            <select name='Kelas Koding'>
                                <option value="">Pilih Salah Satu Program</option>
                                <option value="">Fuji</option>
                                <option value="">Pilih Salah Satu Program</option>
                                <option value="">Pilih Salah Satu Program</option>
                            </select>
                        <p>Foto Surat Kesungguhan</p>
                        <input name='file' type="file"></input>
                        <p>Harapan Untuk Coding Bootcamp Ini :</p>
                        <textarea name='file' type="textarea"></textarea>
                    </label>
                </div>
            </div>
        </div>
    </>
  )
}

export default IniForm