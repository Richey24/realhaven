import React, { useEffect, useState } from 'react'
import logo from '../img/logo.svg'
import bg from '../img/Frame 1.png'
import eye from '../img/Show.svg'
import google from '../img/flat-color-icons_google.svg'
import './Login.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const LoginComp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const email = document.cookie.split("=")[1]
        if (email) {
            navigate("/dashboard")
        }
    }, [])

    //validating password
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


    //validating email
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

    //validating submission
    const validateForm = async (event) => {
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
        const info = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        const res = await axios.post("http://localhost:5000/user/login", info, { validateStatus: () => true })
        const user = await res.data
        switch (res.status) {
            case 404:
                submitError.innerHTML = "No User Found With This Email"
                submitError.style.visibility = 'visible'
                submitError.style.color = 'red'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
                break;
            case 401:
                submitError.innerHTML = "Invalid Password"
                submitError.style.visibility = 'visible'
                submitError.style.color = 'red'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
                break;
            case 500:
                submitError.innerHTML = "An Error Occurred, Try Again"
                submitError.style.visibility = 'visible'
                submitError.style.color = 'red'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
                break;
            case 200:
                document.cookie = `email=${user.email}`
                navigate("/dashboard")
                break;
            default:
                break;
        }
    }

    // toggling hide and show password
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
                        <input type="text" value={email} placeholder="name@example.com" onChange={validateEmail} id="email" name='email' />
                        <p id="emailError" style={{ visibility: "hidden" }}>Email is required</p>
                    </div>

                    <div className="label">
                        <label htmlFor="password">Password</label>
                        <br />
                        <div className='eyeDivLog'>
                            <input id='password' type='password' value={password} onChange={validatePassword} name="password" />
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