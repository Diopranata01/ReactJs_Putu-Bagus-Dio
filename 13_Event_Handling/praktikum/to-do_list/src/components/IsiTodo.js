import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormGroup, Input, Label } from 'reactstrap';
import { 
    faPen
 } from '@fortawesome/free-solid-svg-icons'

const IsiTodo = () => {
    
    const [toDo, setToDo] = useState([
        {id : 1, title : "Mengerjakan Excercise", status : false},
        {id : 2, title : "Mengerjakan Assignment", status : false}

    ])

    //Temp
    const [newTask, setNewTask] = useState('');//not empty useState(),to avoid error
    const [updateData, setUpdateData] = useState('');

    //AddTask
    const addTask = () => {
        if(newTask){
            //creating new index length in toDo, newItems insertion of id, etc.
            let newVar = toDo.length + 1;
            let newItems = {id : newVar, title : newTask, status:false}
            setToDo([...toDo, newItems])//new data insertion replace the ...toDo
            setNewTask('')//empty temp
        }
    }

    //DeleteTask
    const deleteTask = (id) => {
        let newTask = toDo.filter(task => task.id != id)
        setToDo (newTask);
    }

    //MarkerDone
    const markDoneTask = (id) => {
        let newTask = toDo.map(task => {
            if(task.id === id){
                return ({...task, status: !task.status})//change index value opposite
            }
            return task;
        })
        setToDo(newTask)
    }

    //UpdateTask
    const updateTask = () => {

    }

    //CancelUpdate
    const cancelUpdate = () => {

    }

    //ChangeTask
    const changeTask = (e) => {

    }

       
    return (
        <>
         <div className="body">
            <div>

                <div className="row row-form justify-content-between">
                    <div className="col-10">
                        <Input
                        value={newTask}
                        onChange={ (e) => setNewTask (e.target.value)}//assign setNewTask while typing, before submited newTask
                        className="form-control form-control-md border-0"
                        placeholder="Add todo..."
                        />
                    </div>
                    <div className="col-1">
                        <button onClick={addTask} className="btn">Submit</button>
                    </div>
                    
                </div>
                
                {/* 
                **Tampilan**
                *check isi*  
                */}
                {toDo !== toDo.length ? '': <p> <br/><br/>Belum ada Task ... </p>}

                {/* <FormGroup switch>
                    <Input
                      type="switch"
                      checked={state}
                      onClick={() => {
                        setState(!state);
                      }}
                    /><Label check>Checked switch checkbox input</Label>
                </FormGroup> */}

                {toDo && toDo
                //Map the task => toDo
                    .map ((task, index) => {
                        return(
                            <React.Fragment key={task.id}>{/* <= keyprops */}
                            <div className="col taskDecor border-top-0 border-bottom">
                                    <Input type="checkbox" //checklist to define changes in status:id 
                                        onClick={()=>markDoneTask(task.id)}
                                        className="check-box"
                                    />
                                   <div className={task.status? 'done fst-italic' : 'not-done'}>
                                      <span className="taskIndex">{index + 1 +'. '}</span> 
                                      <span className="taskText">{task.title}</span>
                                   </div>
                                   {task.status ? null : (
                                   <span title="Edit"
                                   /* onClick={() => setUpdateData({
                                    id: task.id,
                                    title:task.title,
                                    status: task.status ? true : false
                                   })} */
                                   >
                                    <FontAwesomeIcon icon={faPen}
                                    className="penIcon"
                                    />
                                   </span>
                                   )}
                                   <div className="wrapDelete">
                                       <button 
                                       title="deleteBtn"
                                       onClick={()=>deleteTask(task.id)}//trf params
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