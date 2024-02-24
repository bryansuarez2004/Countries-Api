import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Prueba from './components/Prueba.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
 <Routes>
  <Route path='/' element={  <App />}/>
  <Route path='/:id' element={  <Prueba />}/>
 </Routes>
   </BrowserRouter>
   </Provider>
  </React.StrictMode>,
) 
