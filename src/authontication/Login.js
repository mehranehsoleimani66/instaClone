import React, { useContext, useState } from 'react'
import { userContext } from "../App";
import './LogIn.css'
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
const Login =()=> {
    const [email,setEmail]= useState("");
    const [user,setUser]= useState("");
    const [password,setPassword]= useState("");


   const myUserContext = useContext(userContext)
   const navigate = useNavigate()

   const loginHandler=()=>{
  
    //شماره کاربر و کد تایید به بک اند ارسال  می کنیم
    axios.post("http://localhost:3000/user",{
        user:user,
        email:email,
        password:password,
    }).then(({data})=>{
        console.log(data,'data from post')
        myUserContext.setUserHandler(data?.data)
         navigate("/HomePage")
    }).catch((err)=>{
       console.log(err)
    })
        
    }
    
  return (
    <div className='login'>
<img src='./images.png'/>
<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
<input type='text' value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Username'/>
<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
<button onClick={loginHandler}>Log in</button>
    </div>
  )
}

export default Login