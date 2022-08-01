import React, { useEffect, useState } from 'react'
import logo from '../img/logo.svg'
import bg from '../img/register.png'
import eye from '../img/Show.svg'
import google from '../img/flat-color-icons_google.svg'
import "./Register.css"
import countryTelData from 'country-telephone-data'
import down from '../img/Stroke-1.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import url from './../url';
import { Spinner } from 'react-bootstrap';

const RegisterComp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [code, setCode] = useState(countryTelData.allCountries[80].dialCode)
    const [spin, setSpin] = useState(false)
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
        setSpin(true)
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
            fullname: event.target.fullname.value || event.target.firstname.value + " " + event.target.lastname.value,
            email: event.target.email.value,
            phone: event.target.number.value,
            password: event.target.password.value
        }
        console.log(info);
        const res = await axios.post(`${url}/user/register`, info, { validateStatus: () => true })
        switch (res.status) {
            case 500:
                submitError.innerHTML = "There was an error registering this user, please try again"
                submitError.style.visibility = 'visible'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
                break;
            case 203:
                submitError.innerHTML = "This email is already registered, kindly login"
                submitError.style.visibility = 'visible'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 3000);
                break
            case 200:
                document.cookie = `email=${info.email}`
                navigate("/dashboard")
                break
            default:
                break;
        }
        setSpin(false)
    }

    // toggling country code
    const showList = () => {
        const myList = document.getElementById("countryList")
        myList.classList.toggle("showList")
    }

    // setting active country code
    const getCode = (codeNum) => {
        setCode(codeNum)
        const myList = document.getElementById("countryList")
        myList.classList.toggle("showList")
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

    const oAuth = async () => {
        const res = await axios.get("https://real-haven.herokuapp.com/api/sessions/oauth")
        const rep = await res.data
        console.log(rep);
    }

    return (
        <div className="myContainerReg">
            <div className='side-2'>
                <h1>Register</h1>
                <form onSubmit={validateForm}>
                    <label htmlFor="firstName">Your Name</label>
                    <div className="myName">
                        <input type="text" placeholder="First Name" id="firstName" name='firstname' />
                        <input type="text" placeholder="Last Name" id="lastName" name='lastname' />
                    </div>
                    <div className="fullName">
                        <input type="text" placeholder="Full Name" id="fullName" name='fullname' />
                    </div>
                    <div className="label">
                        <label htmlFor="email">Email address</label>
                        <br />
                        <input type="email" value={email} placeholder="name@example.com" onChange={validateEmail} id="email" name='email' />
                        <p id="emailError" style={{ visibility: "hidden" }}>Email is required</p>
                    </div>

                    <div className="label">
                        <label htmlFor="firstName">Phone Number</label>
                        <br />
                        <div className='phoneNumDiv'>
                            <p onClick={showList} className='mainCountry'>+{code} <img src={down} alt="down" /></p>
                            <input style={{ border: 'none' }} type="tel" placeholder="phone number" id="phoneNumber" name='number' />
                        </div>
                        <ul id='countryList' className='countryList'>
                            {
                                countryTelData.allCountries.sort((a, b) => parseInt(a.dialCode) - parseInt(b.dialCode)).map((code, i) => (
                                    <li key={i} onClick={() => getCode(code.dialCode)}>+{code.dialCode}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="label">
                        <label htmlFor="password">Password</label>
                        <br />
                        <div className='eyeDiv'>
                            <input placeholder='********' id='password' type='password' value={password} onChange={validatePassword} name="password" />
                            <img className='showPass' onClick={showPass} src={eye} alt="" />
                        </div>
                        <p id="passwordError" style={{ visibility: "hidden" }}>Password is required</p>
                    </div>

                    <div className="myBtn">
                        <button type='submit'>{spin ? (<Spinner animation="border" style={{ color: "white" }} />) : "Sign Up"}</button>
                        <p id="submitError" style={{ visibility: "hidden" }}>Fill in the required field</p>
                    </div>

                    <div className="signup">
                        Already have an account?<span onClick={() => navigate("/login")}>Login</span> <br />
                    </div>
                    <div className="opt">
                        <p>Or</p>
                    </div>
                    <div onClick={oAuth} className="google-opt">
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