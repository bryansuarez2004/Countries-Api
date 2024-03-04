import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pageCountry = createSlice({
    name: 'pageCountry',
    initialState:{
            countryInPage: {},
            countriesSugerencies : {
                byRegion:[],
                byLanguage:[]
            },
            isLoading:false

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
            
        },
        isLoadingTrue:(state)=>{
            state.isLoading = true
     },
     isLoadingFalse:(state)=>{
      state.isLoading = false
}
    }


})

export const {setCountry,setSugerenciesByRegion,setSugerenciesByLanguage,isLoadingTrue,isLoadingFalse} = pageCountry.actions

export default pageCountry.reducer

export const getCountryByName = (name)=> (dispatch)=>{
    dispatch(isLoadingTrue())
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
        dispatch(isLoadingFalse())
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
