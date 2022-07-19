import React, { useState } from 'react'
import logo from '../img/logo.svg'
import bg from '../img/Frame 1.png'
import eye from '../img/Show.svg'
import google from '../img/flat-color-icons_google.svg'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const LoginComp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const navigate = useNavigate()

    const validatePassword = (event) => {
        setPassword(event.target.value)
        const passwordError = document.getElementById('passwordError');
        let userPassword = event.target.value
        passwordError.style.visibility = "hidden";
        if (userPassword.length < 1) {
            passwordError.style.visibility = "visible";
            setPassError(false)
            return
        }
        setPassError(true)
    }


    const validateEmail = (event) => {
        setEmail(event.target.value)
        let userEmail = event.target.value
        const emailError = document.getElementById('emailError');
        emailError.style.visibility = "hidden";
        if (userEmail.length < 1) {
            emailError.style.visibility = "visible";
            setEmailError(false)
            return
        }
        setEmailError(true)
    }

    const validateForm = (event) => {
        event.preventDefault()
        const submitError = document.getElementById('submitError');
        if (!emailError || !passError) {
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 3000);
            return
        }
        if (!email.includes("@")) {
            submitError.innerHTML = "Invalid Email"
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 3000);
            return
        }
    }

    const showPass = () => {
        const password = document.getElementById('password');
        if (password.type === "password") {
            password.type = "text"
        } else {
            password.type = "password"
        }
    }

    return (
        <div className="myContainerMob">
            <div className='side-1'>
                <img src={bg} alt="bacKground" />
            </div>
            <div onClick={() => navigate('/')} className="reLogo">
                <img src={logo} alt="logo" />
                Haven
            </div>
            <div className="side-2">
                <h1>Login</h1>
                <form onSubmit={validateForm}>
                    <div className="label">
                        <label htmlFor="email">Email address</label>
                        <br />
                        <input type="text" value={email} placeholder="name@example.com" onChange={validateEmail} id="email" />
                        <p id="emailError" style={{ visibility: "hidden" }}>Email is required</p>
                    </div>

                    <div className="label">
                        <label htmlFor="password">Password</label>
                        <br />
                        <div className='eyeDivLog'>
                            <input id='password' type='password' value={password} onChange={validatePassword} />
                            <img className='showPassLog' onClick={showPass} src={eye} alt="" />
                        </div>
                        <p id="passwordError" style={{ visibility: "hidden" }}>Password is required</p>
                    </div>

                    <div className="myBtn">
                        <button type='submit'>Login</button>
                        <p id="submitError" style={{ visibility: "hidden" }}>Fill in the required field</p>
                    </div>

                    <div className="signup">
                        New user?<span onClick={() => navigate("/register")}>Sign up</span> <br />
                    </div>
                    <div className="opt">
                        <p>Or</p>
                    </div>
                    <div className="google-opt">
                        <img src={google} alt="google" /> <span>login with Google instead</span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginComp