import { createSlice } from "@reduxjs/toolkit";


const getInitialDarkMode = () => {
    const storedValue = localStorage.getItem('darkmode');
    return storedValue ? JSON.parse(storedValue) : false; // Si hay algo en localStorage, úsalo; de lo contrario, usa un valor predeterminado.
  };



const configure = createSlice({
    name:'configure',
    initialState:{
        modeConfigure: false,
        darkMode: getInitialDarkMode(),
       
    },
    reducers:{
       changeModeConfigure:(state)=>{
            state.modeConfigure = !state.modeConfigure
       },
       darkModeOn:(state)=>{
                   state.darkMode = true
       },
       darkModeOff:(state)=>{
        state.darkMode = false
}
    }
})



export const {changeModeConfigure,darkModeOn,darkModeOff} = configure.actions

export default configure.reducer
