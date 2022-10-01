import React from 'react'
import { useRef, useState } from "react"



const IniForm = (props) => {

    const {newData, setNewData, Dataset} = props

    const inputFile = useRef(null)

   const patternReggex = '^[A-Za-z0-9]{4,15}$'
   const uNameReggex = '^[A-Za-z ]{6,30}$'
   const numberReggex = '^[0-9]{3,20}$'

   const fungsiChange = (e) =>{
    const {name , value, type, checked} = e.target

    /* if(name==='name'){
        if(!value){
            <span>Nama harus merupakan huruf besar, dan kecil, sesuai nama lengkap!</span>
        }
    } */

    setNewData({
        ...newData, [name] : type === "checkbox"? checked : value
    })
    console.log(newData)
   }

   /* const checkErr = (e) =>{
        setNewData(e)
        if(!uNameReggex.test(e)){
            setErrmassage('Nama harus merupakan huruf besar, dan kecil, sesuai nama lengkap!')
        }else{
            setErrmassage('')
        }
   } */

   const submitHandler = (e) => {
    // comment preventDefault to refresh page

    if(newData&&inputFile){
        console.log(inputFile)
        console.log(newData)

        let deleteVar = {}
        alert(`Data Pendaftar '${newData.name}' sudah terkirim!`)
        setNewData([
            ...newData, deleteVar
        ])
    }
    e.preventDefault();
    
}

    const resetForm = (e) => {
    if(setNewData){
        
        resetForm()
        /* let newVar = {}

        alert('Data Anda sudah ter-reset')
        setNewData(newVar) */
    }
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
                                    <input name='name' placeholder=' Nama ' value={newData.name} required pattern={uNameReggex} onChange={fungsiChange} className='mb-4'></input>
                                    <span>Nama harus merupakan huruf besar, dan kecil, sesuai nama lengkap!</span>
                                <p>Username</p>
                                    <input name='username' placeholder=' Username ' value={newData.username} required pattern={patternReggex} onChange={fungsiChange} className='mb-4'></input>
                                    <span>Username harus memiliki 6-10 karakter, tidak boleh terdiri dari karakter spesial!</span>
                                <p>Email</p>
                                    <input name='email' placeholder=' Email ' value={newData.email} type="email" required onChange={fungsiChange} className='mb-4'></input>
                                    <span>Email harus berupa email valid!</span>
                                <p>No. Handphone</p>
                                    <input name='nomor' placeholder=' Nomor Telp ' value={newData.nomor} required pattern={numberReggex} onChange={fungsiChange} className='mb-4'></input>
                                    <span>Nomor handphone tidak boleh berupa karakter lain selain angka!</span>
                                <p>Latar Belakang Pendidikan</p>
                                {/* Radios not an controled componenta */}
                                    <label>
                                        <input name='latbel' type="radio" value='it' required checked={newData.latbel === "it"} onChange={fungsiChange}/> IT<br/>
                                        <input name='latbel' type="radio" value='nonIt' required checked={newData.latbel === "nonIt"} onChange={fungsiChange} /> Non IT
                                    </label>
                                    {/* <span>{errMassage}</span> */}
                                <p className='mt-4'>Kelas Koding yang Dipilih</p>
                                    <select name='kelasCoding' required onChange={fungsiChange}>
                                        <option value="">--Pilih Salah Satu Program--</option>
                                        <option value="Golang">Coding Backend with Golang</option>
                                        <option value="React">Coding Frontend with React</option>
                                        <option value="Fullstack Developer">Fullstack Developer</option>
                                    </select>
                                <p className='mt-4'>Foto Surat Kesungguhan</p>
                                    <input name='file' type="file" required ref={inputFile}></input>
                                <p className='mt-4 mb-0'>Harapan Untuk Coding Bootcamp Ini :</p>
                                    <textarea name='harapan' value={newData.harapan} placeholder=' Tulis Harapan Kalian Disini!' onChange={fungsiChange} className='mb-4'></textarea>
                                <div className='checked-box'>
                                    <input name='checkSetuju' type='checkbox' /* value={newData.checkSetuju} */ required checked={newData.checkSetuju} onChange={fungsiChange} className='mb-4'></input>
                                    <label><p>Saya setuju, untuk memberikan informasi ini<br/>kepada pihak Bootcamp</p></label>
                            </div>
                        </label>
                            <label>
                                <button className='btn btn-primary'>Submit</button>
                            </label>
                                <button className='btn btn-secondary ms-5' onClick={resetForm}>Reset</button>
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