import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const app = createSlice({
    name: 'app',
    initialState:{
            allCountries:[],
            countriesToShow:[],
            currentPage: 1,
            isLoading:false
    },
    reducers:{
         setCountries: (state,action)=>{
               state.allCountries = action.payload
               state.countriesToShow = action.payload
         },
         filterCountriesByNameAndRegion: (state,action)=>{
             const byName = state.allCountries.filter((country)=>{
                  return country.name.common.toLowerCase().includes(action.payload.country.toLowerCase())
             })
             const byNameAndRegion = byName.filter((country)=>{
                return country.continents[0].includes(action.payload.region)
             })
             
             state.countriesToShow = byNameAndRegion
         },
         changeCurrentPage: (state,action)=>{
                 state.currentPage = action.payload
         },
         isLoadingTrue:(state)=>{
                state.isLoading = true
         },
         isLoadingFalse:(state)=>{
          state.isLoading = false
   }
    }


})

export const {setCountries,filterCountriesByNameAndRegion,changeCurrentPage,isLoadingTrue,isLoadingFalse} = app.actions

export default app.reducer


export const getAllCountriesThunk = ()=> (dispatch)=>{
     dispatch(isLoadingTrue())
     axios.get('https://restcountries.com/v3.1/all')
     .then(({ data }) => {
        console.log(data);
        dispatch(setCountries(data))   
        dispatch(isLoadingFalse())
      })
      .catch((err) => console.log(err));
} 