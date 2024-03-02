import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pageCountry = createSlice({
    name: 'pageCountry',
    initialState:{
            countryInPage: {},
            countriesSugerencies : {
                byRegion:[],
                byLanguage:[]
            }

    },
    reducers:{
        setCountry : (state,action)=>{
                state.countryInPage = action.payload
        },
        setSugerenciesByRegion: (state,action)=>{
             state.countriesSugerencies.byRegion = action.payload
        },
        
        setSugerenciesByLanguage: (state,action)=>{
            state.countriesSugerencies.byLanguage = action.payload
            
        }
    }


})

export const {setCountry,setSugerenciesByRegion,setSugerenciesByLanguage} = pageCountry.actions

export default pageCountry.reducer

export const getCountryByName = (name)=> (dispatch)=>{
    axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then(({ data }) => {
       console.log(data);
       dispatch(getSugerenciesByRegion(data[0].region))
       dispatch(setCountry(data[0]))
     })
     .catch((err) => console.log(err));
}


export const getSugerenciesByRegion = (region)=> (dispatch)=>{
    axios.get(`https://restcountries.com/v3.1/region/${region}`)
    .then(({ data }) => {
        dispatch(setSugerenciesByRegion(data))
     })
     .catch((err) => console.log(err));
}

export const getSugerenciesByLanguage = (language)=> (dispatch)=>{
    axios.get(`https://restcountries.com/v3.1/region/${region}`)
    .then(({ data }) => {
       console.log(data);
     })
     .catch((err) => console.log(err));
}
