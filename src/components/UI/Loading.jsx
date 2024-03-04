import React from 'react'

const Loading = () => {
  return (
    <div className='bg-indigo-400 dark:bg-cyan-900 fixed z-[100] w-screen h-screen top-0 left-0'>
     <div className='grid place-items-center h-full w-full'>
        <div className='w-[100px] aspect-square loader'>
           
        </div>
     </div>
    </div>
  )
}

export default Loading