import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../store/slices/app.slice'

const SinglePage = ({page}) => {
        const dispatch = useDispatch()
         const {currentPage}=   useSelector((store)=>store.app)
 
 const handleChangeCurrentPage = (newPage)=>{
    dispatch(changeCurrentPage(newPage))
 }

  return (
    <div onClick={()=>handleChangeCurrentPage(page)} className={`${currentPage===page? 'bg-red-400' : 'bg-green-400'}`}>{page}</div>
  )
}

export default SinglePage