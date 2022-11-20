import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { initialValue } from '../data/index'

const newValue = initialValue

export const dataSlice = createSlice({
    name: "dataval",
    initialState: {
        dataValues: newValue
    },
    reducers:{
        hapusDaftar: (state, action)=>{
            let deleteTask = state.dataValues.filter((task=> task.id !== action.payload))
            state.dataValues = deleteTask
    
    },
        tambahDaftar: (state, action) =>{
            if (state.dataValues){
                let newVar = {
                    id: state.dataValues.length + 1,//recall the action payload due the data passed by props from an action
                    ...action.payload
                }
                state.dataValues = [...state.dataValues, newVar]
            }
        },
        markerDone: (state, action)=>{
            state.dataValues = state.dataValues.map((task)=>{
                if(task.id === action.payload){
                    return({...task, status: !task.status})
                }
                return task
            })
        }
        
    }
})


export const { hapusDaftar, tambahDaftar, markerDone }= dataSlice.actions;
export default dataSlice.reducer;
// export default initialValue