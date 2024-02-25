import axios from 'axios'
import React, { useEffect } from 'react'

const CountriesList = () => {

  useEffect(()=>{
       axios.get('https://restcountries.com/v3.1/all', {
        headers: {
          'Accept-Language': 'es',
        },
      })
       .then(({data})=>console.log(data))
       .catch((err)=>console.log(err))
  },[])


  return (
    <div>CountriesList</div>
  )
}

export default CountriesList