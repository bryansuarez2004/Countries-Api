import { useEffect } from "react";
import "./App.css";
import CountriesList from "./components/CountriesList";
import Form from "./components/Form";
import { useSelector } from "react-redux";


function App() {
  const {darkMode}=useSelector((store)=>store.configure)
  

useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add('dark')
       console.log('hay darkmode');
  }else{
    console.log('no hay darkmode');
    document.documentElement.classList.remove('dark')

  }
  
  // document.documentElement.classList.toggle('dark')
},[darkMode])

  

  return (
    <>
      <Form/>
      <CountriesList/>
    </>
  );
}

export default App;
