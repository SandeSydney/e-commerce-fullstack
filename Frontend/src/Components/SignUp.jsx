import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUser } from '../Features/usersSlice'

function SignUp() {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [confPass, setConfPass] = useState('')

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const conPassRef = useRef(null)

    const handleSignup = (e) => {
        e.preventDefault()
        setName(nameRef.current.value)
        setPass(passRef.current.value)
        setEmail(emailRef.current.value)
        setConfPass(conPassRef.current.value)

        if (name !== '' && email !== '' && pass !== '' && confPass !== '') {
            if (pass === confPass) {
                {
                    dispatch(addUser({
                        name: name,
                        email: email,
                        password: pass
                    }))
                }
                setName(''); setEmail(''); setPass(''); setConfPass('')
                nameRef.current.value = ''; emailRef.current.value = ''; passRef.current.value = ''; conPassRef.current.value = ''
            } else {
                alert("Passwords don't match!")
            }
        } else {
            return
        }
    }

    return (
        <div className='signupDiv'>
            <form>
                <div>
                    <h2><u>SignUp</u></h2>
                </div>
                <div className="form-element">
                    <label htmlFor="userName">Username:</label>
                    <input ref={nameRef} type="text" name='userName' />
                </div>
                <div className="form-element">
                    <label htmlFor="emal">Email:</label>
                    <input ref={emailRef} type="text" name='email' />
                </div>
                <div className="form-element">
                    <label htmlFor="password">Password:</label>
                    <input ref={passRef} type="text" name='password' />
                </div>
                <div className="form-element">
                    <label htmlFor="conpassword">Confirm Password:</label>
                    <input ref={conPassRef} type="text" name='conpassword' />
                </div>
                <div className="formBtns">
                    <button className={"signupBtn"} onClick={handleSignup}>Sign  Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp