import React from 'react'
import { useState } from 'react'
import './style.css'

const IniBody = () => {

    const [toDoList , setToDo] = useState([
        {id :1 , title :"Membuat Komponen", status : true},
        {id :2 , title :"Unit Testing", status : false},
        {id :3 , title :"Setup Development Environment", status : false},
        {id :4 , title :"Deploy ke Server", status : false}
    ])

    return (
        <>
            <div className='container-lg container1 border border-top-0 border-2'>

                    {toDoList && toDoList.length? '' :<p> <br/><br/>Belum ada Task ... </p>}
                    
                    {toDoList.map((toDo, index)=> {
                        let {id, title, status} = toDo;
                        return(
                            <div key={id} className='col-4'>
                                <div className='border rounded-pill'>
                                    <div className={status? 'done fst-italic' : 'not-done'}>
                                        <span className='toDoIndex'>{index + 1 + '. '}</span>
                                        <span className='toDoText'>{title}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    
                    })}
            </div>
        </>
    )
}

export default IniBody;