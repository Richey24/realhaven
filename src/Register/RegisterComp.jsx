import React, { useState } from 'react'
import logo from '../img/logo.svg'
import bg from '../img/register.png'
import eye from '../img/Show.svg'
import google from '../img/flat-color-icons_google.svg'
import "./Register.css"
import countryTelData from 'country-telephone-data'
import down from '../img/Stroke-1.svg'
import { useNavigate } from 'react-router-dom'

const RegisterComp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [code, setCode] = useState(countryTelData.allCountries[80].dialCode)
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

    const showList = () => {
        const myList = document.getElementById("countryList")
        myList.classList.toggle("showList")
    }

    const getCode = (codeNum) => {
        setCode(codeNum)
        const myList = document.getElementById("countryList")
        myList.classList.toggle("showList")
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
        <div className="myContainer">
            <div className='side-2'>
                <h1>Register</h1>
                <form onSubmit={validateForm}>
                    <label htmlFor="firstName">Your Name</label>
                    <div className="myName">
                        <input type="text" placeholder="First Name" id="firstName" />
                        <input type="text" placeholder="Last Name" id="lastName" />
                    </div>
                    <div className="fullName">
                        <input type="text" placeholder="Full Name" id="fullName" />
                    </div>
                    <div className="label">
                        <label htmlFor="email">Email address</label>
                        <br />
                        <input type="email" value={email} placeholder="name@example.com" onChange={validateEmail} id="email" />
                        <p id="emailError" style={{ visibility: "hidden" }}>Email is required</p>
                    </div>

                    <div className="label">
                        <label htmlFor="firstName">Phone Number</label>
                        <br />
                        <div className='phoneNumDiv'>
                            <p onClick={showList} className='mainCountry'>+{code} <img src={down} alt="down" /></p>
                            <input style={{ border: 'none' }} type="tel" placeholder="phone number" id="phoneNumber" />
                        </div>
                        <ul id='countryList' className='countryList'>
                            {
                                countryTelData.allCountries.sort((a, b) => parseInt(a.dialCode) - parseInt(b.dialCode)).map((code) => (
                                    <li onClick={() => getCode(code.dialCode)}>+{code.dialCode}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="label">
                        <label htmlFor="password">Password</label>
                        <br />
                        <div className='eyeDiv'>
                            <input placeholder='********' id='password' type='password' value={password} onChange={validatePassword} />
                            <img className='showPass' onClick={showPass} src={eye} alt="" />
                        </div>
                        <p id="passwordError" style={{ visibility: "hidden" }}>Password is required</p>
                    </div>

                    <div className="myBtn">
                        <button type='submit'>Sign up</button>
                        <p id="submitError" style={{ visibility: "hidden" }}>Fill in the required field</p>
                    </div>

                    <div className="signup">
                        Already have an account?<span onClick={() => navigate("/login")}>Login</span> <br />
                    </div>
                    <div className="opt">
                        <p>Or</p>
                    </div>
                    <div className="google-opt">
                        <img src={google} alt="google" /> <span>Sign up with Google instead</span>
                    </div>

                </form>
            </div>
            <div onClick={() => navigate('/')} className="reLogo">
                <img src={logo} alt="logo" />
                Haven
            </div>
            <div className="side-1">
                <img src={bg} alt="background" />
            </div>
        </div>
    )
}

export default RegisterComp