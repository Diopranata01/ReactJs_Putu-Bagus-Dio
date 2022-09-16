import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormGroup, Input, Label } from 'reactstrap';
import { 
    faCheck, faPen, faTrashCan
 } from '@fortawesome/free-solid-svg-icons'

const IsiTodo = () => {
    
    const [toDo, setToDo] = useState([
        {id : 1, title : "Mengerjakan Excercise", status : true},
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
    const deleteTask = () => {

    }

    //MarkerDone
    const markDoneTask = (id) => {

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

                <div className="row row-form ">
                    <div className="col-10">
                        <input
                        value={newTask}
                        onChange={ (element) => setNewTask (element.target.value)}//assign setNewTask while typing, before submited newTask
                        className="form-control form-control-md"/>
                    </div>
                    <div className="col-1">
                        <button onClick={addTask} className="btn btn-primary">Submit</button>
                    </div>
                    
                </div>

                {/* check isi  */}
                {toDo != toDo.length ? '': <p> <br/><br/>Belum ada Task ... </p>}

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
                                <div className={task.status? 'done fst-italic' : 'not-done'}>
                                   <span className="taskIndex">{index + 1 +'. '}</span> 
                                   <span className="taskText">{task.title}</span>
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