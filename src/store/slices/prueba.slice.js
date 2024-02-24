import { createSlice } from "@reduxjs/toolkit";

const prueba = createSlice({
    name:'prueba',
    initialState:'',
    reducers:{
        setValue:(state,action)=>{
               return action.payload
        }
    }

})
export const {setValue}= prueba.actions
export default  prueba.reducer 