import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid';

const initialValue = [
    {id : uuidv4(), title : "Mengerjakan Excercise", status : false},
    {id : uuidv4(), title : "Mengerjakan Assignment", status : false}
]

export const dataSlice = createSlice({
    name: "dataval",
    initialState: {
        dataValues: initialValue
    },
    reducers:{
        hapusDaftar: (state, action)=>{
            state.dataValues = state.dataValues.filter((task)=>{
                return task.id !== action.payload
            })
        },
        tambahDaftar: (state, action) =>{
            if (state.dataValues){
                let newVar = {
                    id: uuidv4(),//recall the action payload due the data passed by props from an action
                    ...action.payload
                }
                state.dataValues = [...state.dataValues, newVar]
            }
        }
        
    }
})


export const { hapusDaftar, tambahDaftar }= dataSlice.actions;
export default dataSlice.reducer;
// export default initialValue