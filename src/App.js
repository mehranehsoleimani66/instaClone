import './App.css';
import HomePage from './HomePage';
import { createContext, useEffect, useState } from 'react';
import Authontication from './authontication/Authontication';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




export const userContext = createContext()
function App() {

  const [user,setUser]=useState({})


  useEffect(()=>{
    console.log (user,'user dideh shod')
  },[])
  
  useEffect(()=>{
    
    if (user?.token){
     localStorage.setItem('user',JSON.stringify(user))
    }
    else{
      localStorage.setItem('user',JSON.stringify([]))
    }
  },[user])
  
  
  
  
  useEffect(()=>{
    const prevUser = JSON.parse( localStorage.getItem('user'))
    if (prevUser){
      setUser(prevUser)
    }
    else {
      setUser([])
    }
    
  }
   ,[])
   const setUserHandler=(item)=>{
    setUser(item)
    

   }

  
  return (
    <div className='App'>
      <userContext.Provider value={{user,setUserHandler}}>
      <Router>
      <Routes>
        <Route path="/authontication" element={<Authontication />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
     
      
      </userContext.Provider>

    
      
    </div>
  )
}

export default App;
