import React from 'react'
import './authontication.css'
import Login from './Login'
function Authontication() {
  return (
    <div className='authontication'>
        <div className='auth_left'>
            <img src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk" alt=''/>
        </div>
        <div className='auth_right'>
            <Login/>
            <div className='auth_more'>
                <span>Do You Have Account ?
                    <button>Sign up</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Authontication