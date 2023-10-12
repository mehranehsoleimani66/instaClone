import './Signup.css'
import axios from 'axios'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { useThemeContext } from '../../context/ThemeContext'

function Signup() {
  const theme = useThemeContext()
  const darkMode = theme.darkMode
  const navigate = useNavigate()
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)
  const inputUsernameRef = useRef(null)
  // check the value of inputs (userName, userEmail,userPassword) which should be valid
  const IsValid = () => {
    let isProceed = true
    let errormessage = 'please enter the value in'
    if (inputUsernameRef.current.value === null || inputUsernameRef.current.value === '') {
      isProceed = false
      errormessage += 'userName'
    }
    if (inputEmailRef.current.value === null || inputEmailRef.current.value === '') {
      isProceed = false
      errormessage += 'userEmail'
    }
    if (inputPasswordRef.current.value === null || inputPasswordRef.current.value === '') {
      isProceed = false
      errormessage += 'userPaaword'
    }

    if (!isProceed) {
      toast.warning(errormessage)
    }
    return isProceed
  }

  // signup handler
  const registerHandler = async (e) => {
    if (IsValid()) {
      e.preventDefault()
      const newUser = {
        id: Math.random(),
        userName: inputUsernameRef.current.value,
        userPassword: inputPasswordRef.current.value,
        userEmail: inputEmailRef.current.value
      }
      await axios
        .post('http://localhost:3000/users', newUser)
        .then((response) => {
          toast.success('Registered Success')
          console.log(response)
          navigate('/login')
        })
        .catch((err) => {
          console.log(err)
          toast.error('Registered faild')
          console.log('faild')
        })
    }
  }

  return (
    <form className='signup-page' onSubmit={registerHandler}>
      <div className='sign_left'>
        <img src={`${darkMode ? './images/1.png' : './images/2.jpg'}`} style={{ width: '50%', height: '50%', margin: 'auto' }} alt='' />
      </div>
      <div className='sign_right'>
        <div className='sign_component '>
          <img src={`${darkMode ? './images/logo.png' : './images/Logo-Iight.png'}`} />
          <label>
            User Name<span className='errmsg'>*</span>
          </label>
          <input type='text' className={`${darkMode ? 'inputColorDark' : 'inputColorLight'}`} ref={inputUsernameRef} />

          <label>
            User Email<span className='errmsg'>*</span>
          </label>
          <input type='email' className={`${darkMode ? 'inputColorDark' : 'inputColorLight'}`} ref={inputEmailRef} />

          <label>
            User Password<span className='errmsg'>*</span>
          </label>
          <input type='password' className={`${darkMode ? 'inputColorDark' : 'inputColorLight'}`} ref={inputPasswordRef} />

          <button>sign up</button>
        </div>

        <div className={`signMore ${darkMode ? 'signMoreDark' : 'signMoreLight'}`}>
          <span>
            Do You Have an Account ?<a href='/login'>Log In</a>
          </span>
        </div>
      </div>
    </form>
  )
}

export default Signup
