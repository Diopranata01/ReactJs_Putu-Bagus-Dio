import React from 'react'
import { useRef, useState } from "react"



const IniForm = (props) => {

    const {newData, setNewData} = props
    const [errMassage, setErrMassage] = useState('')
    const inputFile = useRef(null)

   const patternReggex = '^[A-Za-z0-9]{6,10}$'

   const fungsiChange = (e) =>{
    const {name , value, type, checked  } = e.target
    setNewData({
        ...newData, [name] : (type === "checkbox"? checked : value)
    })
    console.log(newData)
   }

   const checkChanges = () =>{

   }

   const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputFile)
    console.log(newData)
   }
    
  return (
    <>
        <div className='container ini-form d-flex justify-content-center align-items-center
        flex-column'>
            <div className='header-form m-5'>
                <div className='row '>
                    <h1>Form Daftar Bootcamp</h1>
                </div>
            </div>
            <div className='body-iniform'>
                <div className='row row-iniform ps-auto '>
                    <form onSubmit={submitHandler}>
                        <label>
                                <p>Nama Lengkap</p>
                            <input name='name' placeholder=' Nama ' value={newData.name} required pattern={'Diopranata'} onChange={fungsiChange}></input>
                                <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                                <p>Username</p>
                            <input name='username' placeholder=' Username ' value={newData.username} required pattern={patternReggex} onChange={fungsiChange}></input>
                                <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                                <p>Email</p>
                            <input name='email' placeholder=' Email ' value={newData.email} type="email" required onChange={fungsiChange}></input>
                                <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                                <p>No. Handphone</p>
                            <input name='nomor' placeholder=' Nomor Telp ' value={newData.nomor} required onChange={'{4,7}'}></input>
                            <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                                    <p>Latar Belakang Pendidikan</p>
                                {/* Radios not an controled componenta */}
                                <label required>
                                    <input name='latbel' type="radio" value='it' onChange={fungsiChange}/> IT<br/>
                                    <input name='latbel' type="radio" value='nonIt' onChange={fungsiChange}/> Non IT
                                </label>
                                <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                                    <p>Kelas Koding yang Dipilih</p>
                                <select name='kelasCoding' value={newData.kelasCoding} onChange={fungsiChange}>
                                    <option value="">--Pilih Salah Satu Program--</option>
                                    <option value="Golang">Coding Backend with Golang</option>
                                    <option value="React">Coding Frontend with React</option>
                                    <option value="Fullstack Developer">Fullstack Developer</option>
                                </select>
                                <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                            <p>Foto Surat Kesungguhan</p>
                            <input name='file' type="file" ref={inputFile}></input>
                            <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                            <p>Harapan Untuk Coding Bootcamp Ini :</p>
                            <textarea name='harapan' value={newData.harapan} placeholder=' Tulis Harapan Kalian Disini!' onChange={fungsiChange}></textarea>
                            <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                            <div className='checked-box'>
                                <input name='checkSetuju' type='checkbox'  /* value={newData.checkSetuju} */ checked={newData.checkSetuju} 
                                onChange={fungsiChange}></input>
                                <label><p>Saya setuju, untuk memberikan informasi ini<br/>kepada pihak Bootcamp</p></label>
                            </div>
                        </label>
                        <div className='btn btn-primary btn-form'>
                            <button>Submit</button>
                        </div>
                    </form>

                    {/* {newData&&newData 
                        .map((dataBaru)=> {
                            let {name} = dataBaru;
                            return(
                              <div key={name}>
                                <span>{name}</span>
                              </div>
                            )
                    })} */}
                </div>
            </div>
        </div>
    </>
  )
}

export default IniForm