import React, { useEffect } from "react";
import { useState } from "react";
import InputTodo from './InputTodo'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert, FormGroup, Input, Label } from 'reactstrap';
import { 
    faL,
    faPen
 } from '@fortawesome/free-solid-svg-icons'

const client= axios.create({
    baseURL:'https://sincere-chimp-41.hasura.app/api/rest/home',
    headers: {'x-hasura-admin-secret': 'alyiXkYUVP2vhVJu9TCn1ySeY0CfE1dRTTmbGr4om6dJu4VnBnyQVjEB25PdtsCf'}
})

const IsiTodo = () => {
    
    const [toDo, setToDo] = useState([])
    const [Loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getToDo(){
            const response = await client.get();
            setToDo(response.data.todo_list);
        }
        if(Loading) getToDo();
        setLoading(false)
    }, [Loading])

    //Delete
    async function deleteTodo(e, newId){
        e.preventDefault();
            await client.delete('/delete/'+newId);
        alert('Terhapus!')
        setLoading(true);
    }

    //Markdone
    async function checklistTodo(e, newId){
        e.preventDefault();

        if(toDo.completed === false){
            await client.put('/update/false/'+newId);
            alert('Berhasil Update Ke False!')

        }else if(!toDo.completed){
            await client.put('/update/true/'+newId);
            alert('Berhasil Update Ke True!')
        }

        setLoading(true);
    }


    //Reload
    function setReload(newReload) {
        setLoading(newReload)
      }

    //MarkerDone
    // const markDoneTask = (id) => {
    //     let newTask = toDo.map(task => {
    //         if(task.id === id){
    //             return ({...task, status: !task.status})//change index value opposite
    //         }
    //         return task;
    //     })
    //     setToDo(newTask)
    // }


       
    return (
        <>
         <div className="body">
            <div>

                < InputTodo setReload={setReload} />


                {Loading ? '' :''}

                {toDo ? '': <p> <br/><br/>Belum ada Task ... </p>}

                {toDo && toDo
                //Map the task => toDo
                    .map ((task, index) => {
                        return(
                            <React.Fragment key={task.id}>{/* <= keyprops */}
                            <div className="col taskDecor border-top-0 border-bottom">
                                    <Input type="checkbox" //checklist to define changes in status:id 
                                        onClick={ (e) => checklistTodo(e, task.id)}
                                        className="check-box"
                                    />
                                   <div className={task.completed? 'done fst-italic' : 'not-done'}>
                                      <span className="taskIndex">{index + 1 +'. '}</span> 
                                      <span className="taskText">{task.title}</span>
                                   </div>
                                   {task.status ? null : (
                                   <span title="Edit">
                                    <FontAwesomeIcon icon={faPen}
                                    className="penIcon"
                                    />
                                   </span>
                                   )}
                                   <div className="wrapDelete">
                                       <button 
                                       title="deleteBtn"
                                       onClick={(e) => deleteTodo(e,task.id)}//trf params
                                       value= "Delete"
                                       className="btn btn-light"
                                       >
                                           <p>Delete</p>
                                       </button>
                                   </div>
                            </div>
                            </React.Fragment>
                        )
                    })
                }
                
            </div>

         </div>
        </>
    )
}

export default IsiTodo