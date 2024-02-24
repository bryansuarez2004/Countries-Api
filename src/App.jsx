
import './App.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setValue } from './store/slices/prueba.slice'

function App() {
   const value = useSelector((store)=>store.prueba)
   const dispatch = useDispatch()

  const navigate = useNavigate()
  const handle = (e)=>{
    console.log(e.target.value);
     dispatch(  setValue(e.target.value))
  }
  const handlede = ()=>{
     navigate('/32')
  }
  const handledee = ()=>{
    dispatch(  setValue(1))
 }
  return (
    <>
    <input onChange={handle} type="text" value={value}/>
    <div>{value}</div>
    <button onClick={handlede} >dsad</button>
    <button onClick={handledee} >1</button>
    </>
  )
}

export default App
