import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { addUser, loginUser } from '../Features/usersSlice'

export default function Login() {
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')

  const unameRef = useRef(null)
  const passRef = useRef(null)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(()=>{
    unameRef.current.focus()
  },[])

  const handleChange = () => {
    setUname(unameRef.current.value)
    setPass(passRef.current.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (uname.trim() !== '' && pass.trim() !== '') {
      dispatch(addUser({ name: uname, pass: pass }))
      dispatch(loginUser())
      navigate('homepage/products')
    }
    clearInput()
  }

  const clearInput = () => {
    unameRef.current.value = ''
    passRef.current.value = ''
  }

  return (
    <div className="containerLogin">
      <div className='loginNav'>
        <h1>SanMart Shopping</h1>
      </div>
      <hr />
      <div className='container'>
        <div className='loginDiv'>
          <form>
            <div>
              <h2><u>Login</u></h2>
            </div>
            <div className="form-element">
              <label htmlFor="userName">Username:</label>
              <input type="text" name='userName' ref={unameRef} onChange={handleChange} />
            </div>
            <div className="form-element">
              <label htmlFor="password">Password:</label>
              <input type="text" name='password' ref={passRef} onChange={handleChange} />
            </div>
            <div className="formBtns">
              <button className={"loginBtn"} onClick={handleLogin}>
                <Link className='logLink' to={'/homepage/products'}>Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
