import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const PageCountry = () => {
   const params = useParams()
  console.log(params);
    useEffect(()=>{
        sessionStorage.setItem('busquedaAnterior', 'true');
     },[])
  return (
    <Link to={'/'}>dame click </Link>
  )
}

export default PageCountry