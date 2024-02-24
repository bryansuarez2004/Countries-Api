import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Prueba = () => {
  const navigate=useNavigate()
  const handlede = ()=>{
    navigate('/')
 }

  return (
   <>
        <button onClick={handlede} >dsad    </button>

    <div>ghola</div>
    </>

  )
}

export default Prueba