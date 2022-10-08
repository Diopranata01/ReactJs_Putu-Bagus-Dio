import React from 'react'
import axios from "axios";
import { useState}  from "react";
import { Input } from 'reactstrap';

// Init Axios baseURL and headers
const client= axios.create({
    baseURL: 'https://sincere-chimp-41.hasura.app/api/rest/home/create',
    headers: {'x-hasura-admin-secret': 'alyiXkYUVP2vhVJu9TCn1ySeY0CfE1dRTTmbGr4om6dJu4VnBnyQVjEB25PdtsCf'}
})

export default function InputTodo(props) {

    const [newTitle, setNewTitle] = useState([{
        title : ''
    }])

    async function createTodo(e){
        e.preventDefault();

        if(newTitle.title){
            //insert via post
            await client.post('/',
                {   
                    title: newTitle.title
                });
            alert('Berhasil Memasukan Data!')
    
            //clearing the temp user input
            setNewTitle({
                title : ''
            })
    
            //reseting the page
            const temp = true
            props.setReload(temp)
        }else {
            alert('Silahkan isi terlebih dahulu!')
        }
    }

    const onchange = (e) =>{
            const {value, name} = e.target

            setNewTitle({
                ...newTitle, [name] : value
            })
    }

    return(
        <>
        <div className="row row-form justify-content-between">
                    <div className="col-10">
                        <Input
                        value={newTitle.title}
                        onChange={onchange}//assign setNewTask while typing, before submited newTask
                        className="form-control form-control-md border-0"
                        placeholder="Add todo..."
                        name='title'
                        />
                    </div>
                    <div className="col-1">
                        <button onClick={createTodo} className="btn">Submit</button>
                    </div>
                    
        </div>
    </>
    )
}