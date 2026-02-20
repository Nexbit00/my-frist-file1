import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'




import Home from './component/Home'
import Create from './component/Create'
import Read from './component/Read'
import Edit from './component/Edit'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/create' element={<Create/>}></Route>
       <Route path='/read/:id' element={<Read/>}></Route>
       <Route path='/edit/:id' element={<Edit/>}></Route>
       </Routes>
    </BrowserRouter>
     
  )
}

export default App