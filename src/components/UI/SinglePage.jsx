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
    <div onClick={()=>handleChangeCurrentPage(page)} className={`${currentPage===page? 'bg-teal-300 shadow-xl shadow-teal-300 dark:bg-cyan-600 dark:shadow-sm dark:text-white ' : 'bg-slate-300'} aspect-square w-[30px] md:w-[40px] rounded-lg grid place-items-center cursor-pointer md:text-lg `}>{page}</div>
  )
}

export default SinglePage