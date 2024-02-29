import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PageCountry = () => {
    useEffect(()=>{
        sessionStorage.setItem('busquedaAnterior', 'true');
     },[])
  return (
    <Link to={'/'}>dame click </Link>
  )
}

export default PageCountry