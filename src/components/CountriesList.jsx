import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage, getAllCountriesThunk } from '../store/slices/app.slice'
import CountryCard from './UI/CountryCard'
import { pagination } from '../utils/pagination'
import SinglePage from './UI/SinglePage'

const CountriesList = () => {
       const dispatch = useDispatch()
       const {countriesToShow,currentPage}=useSelector((store)=>store.app)

    const {countriesByPage,arrayOfPages}=pagination(currentPage,countriesToShow)

  useEffect(()=>{
    const thereIsLastSearch = sessionStorage.getItem('busquedaAnterior');
    if(!thereIsLastSearch){
      dispatch(getAllCountriesThunk())

    }
  },[])
//axios.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=hello,how are you')
// endpoint que traduce, averiguar posteriormente

   useEffect(()=>{
        dispatch(changeCurrentPage(1))
   },[countriesToShow])

  return (

    <>
     <div className='p-5 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5' >
     {countriesByPage.map((country)=>{
             return <CountryCard key={country.name.common} country ={country}/>
     })}
     </div>
     <div>
      {
        arrayOfPages.map((page)=>{
          return <SinglePage key={page} page={page}/>
        })
      }
     </div>
    </>
  )
}

export default CountriesList