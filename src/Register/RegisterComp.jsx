import React, { useEffect, useState } from 'react'
import logo from '../img/logo.svg'
import bg from '../img/register.png'
import eye from '../img/Show.svg'
import google from '../img/flat-color-icons_google.svg'
import art from "../img/Artwork.svg"
import search from "../img/Search.svg"
import "./Register.css"
import down from '../img/Stroke-1.svg'
import { useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import url from './../url';
import { Spinner } from 'react-bootstrap';

const RegisterComp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [spin, setSpin] = useState(false)
    const [mail, setMail] = useState("")
    const [cc, setCC] = useState([])
    const [scc, setSCC] = useState([])
    const [acc, setACC] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const token = document.cookie?.split(" ")[0]?.split("=")[1]
        if (token) {
            navigate("/dashboard")
            return
        }
        (async () => {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            const coun = await res.data
            setCC(coun)
            setSCC(coun)
            setACC(coun[231])
        })()
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
        const mailDiv = document.getElementById("mailDiv")
        const sideTwoDiv = document.getElementById("sideTwoDiv")
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
        const name = event.target.fullname.value.split(" ")
        const info = {
            firstName: name[0] || event.target.firstname.value,
            lastName: name[1] || event.target.lastname.value,
            email: event.target.email.value,
            phoneNumber: acc.idd.root + acc.idd.suffixes + event.target.number.value,
            password: event.target.password.value
        }
        if (info.firstName.length < 2 || info.lastName.length < 2) {
            submitError.innerHTML = "Name is required"
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
            setSpin(false)
            return
        }
        if (info.phoneNumber.length < 4) {
            submitError.innerHTML = "Phone number is required"
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
            setSpin(false)
            return
        }
        if (info.password.length < 8) {
            submitError.innerHTML = "Password must be greater than 8"
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
            setSpin(false)
            return
        }
        if (info.password.search(/[a-z]/) < 0) {
            submitError.innerHTML = "Password must contain at least one lowercase character"
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
            setSpin(false)
            return
        }
        if (info.password.search(/[A-Z]/) < 0) {
            submitError.innerHTML = "Password must contain at least one uppercase character"
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
            setSpin(false)
            return
        }
        if (info.password.search(/[0-9]/) < 0) {
            submitError.innerHTML = "Password must contain at least one number"
            submitError.style.visibility = 'visible'
            setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
            setSpin(false)
            return
        }
        const theMail = info.email.substring(info.email.indexOf("@") + 1, info.email.length)
        setMail(theMail)
        const res = await axios.post(`${url}/v1/user/register`, info, { validateStatus: () => true })
        const rep = await res.data
        console.log(rep);
        switch (res.status) {
            case 500:
                submitError.innerHTML = "There was an error registering this user, please try again"
                submitError.style.visibility = 'visible'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
                break;
            case 400:
                submitError.innerHTML = "Fill in all the required input and try again"
                submitError.style.visibility = 'visible'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
                break;
            case 409:
                submitError.innerHTML = "This email is already registered, kindly login"
                submitError.style.visibility = 'visible'
                setTimeout(function () { submitError.style.visibility = 'hidden'; }, 9000);
                break
            case 200:
                setSpin(false)
                sideTwoDiv.style.display = "none"
                mailDiv.style.display = "block"
                const resend = document.getElementById("resend")
                const counter = document.getElementById("count")
                resend.setAttribute("disabled", true)
                const countDown = setInterval(() => {
                    if (parseInt(counter.innerHTML) < 1) {
                        clearInterval(countDown)
                        resend.removeAttribute("disabled")
                        resend.style.color = "#2E7DD7"
                        resend.style.cursor = "pointer"
                        counter.style.display = "none"
                    }
                    counter.innerHTML = parseInt(counter.innerHTML) - 1
                }, 1000)
                const { user } = rep

                const timer = setInterval(async () => {
                    const resp = await axios.get(`${url}/v1/user/check/valid/${user._id}`)
                    const status = await resp.data
                    if (status) {
                        clearInterval(timer)
                        document.cookie = `token=${rep.token}=`
                        document.cookie = `id=${user._id};expires=${new Date(new Date().getTime() + 60 * 60 * 1000 * 24 * 10).toGMTString()}`
                        navigate("/dashboard")
                    }
                }, 5000)
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
        setACC(codeNum)
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

    const oAuth = useGoogleLogin({
        onSuccess: async (response) => {
            setSpin(true)
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
            document.cookie = `token=${mainUser.token};expires=${new Date(new Date().getTime() + 60 * 60 * 1000 * 24 * 10).toGMTString()}`
            document.cookie = `id=${mainUser.user._id};expires=${new Date(new Date().getTime() + 60 * 60 * 1000 * 24 * 10).toGMTString()}`
            setSpin(false)
            navigate("/dashboard")
        }
    })

    const resend = async () => {
        const resend = document.getElementById("resend")
        const counter = document.getElementById("count")
        counter.innerHTML = 60
        resend.setAttribute("disabled", true)
        resend.style.color = "#6B7280"
        resend.style.cursor = "not-allowed"
        counter.style.display = "block"
        // await axios.post(`${url}/v1/user/resend-confirmaccount`, {email: email})

        const countDown = setInterval(() => {
            if (parseInt(counter.innerHTML) < 1) {
                clearInterval(countDown)
                resend.removeAttribute("disabled")
                resend.style.color = "#2E7DD7"
                resend.style.cursor = "pointer"
                counter.style.display = "none"
            }
            counter.innerHTML = parseInt(counter.innerHTML) - 1
        }, 1000)

    }

    const getSearch = (event) => {
        const searchResult = scc.filter((sc) => sc.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
        setCC(searchResult)
    }

    if (!acc.idd) {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Spinner animation="border" style={{ color: "#2E7DD7" }} />
            </div>
        )
    }

    return (
        <div className="myContainerReg">
            <div className='side-2'>
                <div id='sideTwoDiv'>
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
                                <p onClick={showList} className='mainCountry'><img className='counFlag' src={acc.flags?.svg} alt="" /> <img className='dropImg' src={down} alt="down" /></p>
                                <span className='counCode'>{acc.idd?.root}{acc.idd?.suffixes}</span>
                                <input style={{ border: 'none', borderRadius: "0px", fontFamily: "Sora" }} type="tel" placeholder="phone number" id="phoneNumber" name='number' />
                            </div>
                            <div id='countryList' className='countryList'>
                                <div><img src={search} alt="" /><input onChange={getSearch} placeholder='Search for countries' type="text" /></div>
                                <ul>
                                    {
                                        cc.map(({ name, idd, flags }, i) => (
                                            <li onClick={() => getCode({ idd, flags })} key={i}><img className='counFlag' src={flags?.svg} alt="" />{name?.common} ({idd?.root}{name?.common !== "United States" && (idd?.suffixes)})</li>
                                        ))
                                    }
                                </ul>
                            </div>
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
                <div id='mailDiv' className='mailDiv'>
                    <center>
                        <img src={art} alt="" />
                        <h4>Check your mail</h4>
                        <p>We have sent a link for you to confirm your email</p>
                        <button><a href={`https://${mail}`} target="_blank" rel="noreferrer noopener">Open email app</a></button>
                        <h5>Did not receive email? Check your spam folder or <button id="resend" onClick={resend}>resend verification link</button><span id="count">60</span></h5>
                    </center>
                </div>
            </div>
            <div onClick={() => navigate('/')} className="reLogo">
                <img src={logo} alt="logo" />
                Haven
            </div>
            <div className="side-1">
                <img src={bg} alt="background" />
            </div>
        </div >
    )
}

export default RegisterComp