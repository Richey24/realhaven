import React, { useEffect, useState } from 'react'
import logo from '../img/logo.svg'
import bg from '../img/Frame 1.png'
import eye from '../img/Show.svg'
import google from '../img/flat-color-icons_google.svg'
import lock from "../img/Lock.svg"
import art from "../img/Artwork.svg"
import './Login.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import url from './../url';
import { Spinner } from 'react-bootstrap';
import { useGoogleLogin } from '@react-oauth/google';

const LoginComp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [spin, setSpin] = useState(false)
    const [mail, setMail] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const email = sessionStorage.getItem("email")
        if (email) {
            navigate("/dashboard")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
            setSpin(false)
            return
        }
        if (!email.includes("@")) {
            submitError.innerHTML = "Invalid Email"
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
            setSpin(false)
            return
        }
        const info = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        const res = await axios.post(`${url}/v1/user/login`, info, { validateStatus: () => true })
        const user = await res.data
        console.log(user);
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
            case 400:
                submitError.innerHTML = "Invalid Email Or Password"
                submitError.style.visibility = 'visible'
                submitError.style.color = 'red'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
                break;
            case 403:
                submitError.innerHTML = "Confirm your email to complete registration"
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
                sessionStorage.setItem("id", user.id)
                navigate("/dashboard")
                break;
            default:
                break;
        }
        setSpin(false)
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

    const forgotPass = () => {
        const forgot = document.getElementById("forgotMain")
        const sideMain = document.getElementById("theSideMain")
        sideMain.style.display = "none"
        forgot.style.display = "block"
    }

    const hidePass = () => {
        const forgot = document.getElementById("forgotMain")
        const sideMain = document.getElementById("theSideMain")
        forgot.style.display = "none"
        sideMain.style.display = "block"
    }

    const showMail = (event) => {
        event.preventDefault()
        const forgot = document.getElementById("forgotMain")
        const sideMain = document.getElementById("theSideMain")
        const mailDiv = document.getElementById("mailDiv")
        const email = event.target.forgotEmail.value
        const theMail = email.substring(email.indexOf("@") + 1, email.length)
        setMail(theMail)
        forgot.style.display = "none"
        sideMain.style.display = "none"
        mailDiv.style.display = "block"
    }


    const oAuth = useGoogleLogin({
        onSuccess: async (response) => {
            const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`)
            const rep = await res.data
            const user = {
                firstName: rep.given_name,
                lastName: rep.family_name,
                email: rep.email,
                image: rep.picture
            }
            const result = await axios.post(`${url}/v1/user/oauth/save`, user)
            const mainUser = await result.data
            sessionStorage.setItem("token", mainUser.token)
            sessionStorage.setItem("id", mainUser.user._id)
            sessionStorage.setItem("email", mainUser.user.email)
            navigate("/dashboard")
        }
    })
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
                <div id="theSideMain">
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
                            <div className='forgotDiv'>
                                <div>
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <p onClick={forgotPass}>Forgot password</p>
                            </div>
                            <p id="passwordError" style={{ visibility: "hidden" }}>Password is required</p>
                        </div>

                        <div className="myBtn">
                            <button type='submit'>{spin ? (<Spinner animation="border" style={{ color: "white" }} />) : "Login"}</button>
                            <p id="submitError" style={{ visibility: "hidden" }}>Fill in the required field</p>
                        </div>

                        <div className="signup">
                            New user?<span onClick={() => navigate("/register")}>Sign up</span> <br />
                        </div>
                        <div className="opt">
                            <p>Or</p>
                        </div>
                        <div onClick={oAuth} className="google-opt">
                            <img src={google} alt="google" /> <span>login with Google instead</span>
                        </div>

                    </form>
                </div>
                <div id='forgotMain' className="forgotMain">
                    <h4>Forgot your Password?</h4>
                    <p>That’s okay, it happens! Enter your email and we’ll send you instructions.</p>
                    <center>
                        <img src={lock} alt="" />
                    </center>
                    <form onSubmit={showMail}>
                        <div className="label">
                            <div>
                                <label htmlFor="email">Email address</label>
                                <br />
                                <input type="text" value={email} placeholder="name@example.com" onChange={validateEmail} id="forgotEmail" name='forgotEmail' />
                            </div>
                        </div>
                        <center>
                            <button type="submit">Send Instructions</button>
                            <h5 onClick={hidePass}>Back to login page</h5>
                        </center>
                    </form>
                </div>
                <div id='mailDiv' className='mailDiv'>
                    <center>
                        <img src={art} alt="" />
                        <h4>Check your mail</h4>
                        <p>We have sent an instructions to recover your password to your mail</p>
                        <button><a href={`https://${mail}`} target="_blank" rel="noreferrer noopener">Open email app</a></button>
                        <h5>Did not receive email? Check your spam folder or <span>resend verification link</span></h5>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default LoginComp