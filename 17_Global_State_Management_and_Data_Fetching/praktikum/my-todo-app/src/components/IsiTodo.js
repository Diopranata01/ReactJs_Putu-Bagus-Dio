import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { hapusDaftar, markerDone } from '../store/dataSlice';
import { Input } from 'reactstrap';
import initialValue from '../store/dataSlice';
import InputUser from './InputUser'
import {
    faPen
 } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";

const IsiTodo = () => {
    

    const jumlahData = useSelector((state)=> state.dataval.dataValues)
    const dispatch = useDispatch()
       
    return (
        <>
         <div className="body">
            <div>
                {/* ---- */}
                < InputUser/>

                {/* ---- */}
                {jumlahData && jumlahData.length ? '': <p> <br/><br/>Belum ada Task ... </p>}

                {
                    jumlahData.map ((task, index) => {
                        return(
                            <div key={task.id}>
                            <div className="col taskDecor border-top-0 border-bottom">
                                    <Input type="checkbox" //checklist to define changes in status:id 
                                        onClick={()=>{dispatch(markerDone(task.id))}}
                                        checked={task.status}
                                        className="check-box"
                                    />
                                   <div className={task.status? 'done fst-italic' : 'not-done'}>
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
                                       onClick={()=>{dispatch(hapusDaftar(task.id))}}//trf params
                                       value= "Delete"
                                       className="btn btn-light"
                                       >
                                           <p>Delete</p>
                                       </button>
                                   </div>
                            </div>
                            </div>
                        )
                    })
                }
                
            </div>

         </div>
        </>
    )
}

export default IsiTodo