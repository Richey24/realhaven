import React from 'react'
import logo from '../img/logo.svg'
import bg from '../img/Frame 1.png'
import eye from '../img/Show.svg'
import google from '../img/flat-color-icons_google.svg'
import './Login.css'

const LoginComp = () => {
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const submitError = document.getElementById('submit-error');

    function validateEmail() {
        const email = document.getElementById('user-email').Value;

        if (email.lenght < 1) {
            emailError.innerHTML = 'Email is required'
            return false;
        }

        if (email === null) {
            emailError.innerHTML = 'input email'
            return false;
        }

        if (!email.match(/^w+[.-]?w+@w+([.-]?w+)*(.w{2,4})+$/)) {
            emailError.innerHTML = 'Invalid Email'
            return false;
        }
        emailError.innerHTML = 'valid'
        return true;

    }

    function validatePassword() {
        const password = document.getElementById('user-password').Value;

        if (password.lenght < 1) {
            passwordError.innerHTML = 'Invalid';
            return false;

        }

        if (!password.match(/^$[A-Za-z]/._ / -[0 - 9])) {
            passwordError.innerHTML = 'Invalid'
            return false;
        }

        passwordError.innerHTML = 'valid'
        return true;
    }

    const validateForm = () => {
        if (!validateEmail() || !validatePassword()) {
            submitError.style.display = 'block';
            submitError.innerHTML = 'please fix error'
            setTimeout(function () { submitError.style.display = 'none'; }, 3000);
            return false;
        }

    }

    return (
        <div className="myContainer">
            <div className='side-1'>
                <img src={bg} alt="bacKground" />
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
                Haven
            </div>
            <div className="side-2">
                <h1>Login</h1>
                <form action="">
                    <div className="label">
                        <label for="email">Email address</label>
                        <br />
                        <input type="text" placeholder="name@example.com" id="user-email" onKeyUp={() => validateEmail()} />
                        <p id="email-error"></p>
                    </div>
                    <div className="label">
                        <label for="password">Password</label>
                        <br />
                        <input type="password" placeholder="" />  <img className='passordEye' src={eye} alt="" id="user-password" onKeyUp={() => validatePassword()} />
                        <p id="password-error"></p>
                    </div>

                    <div className="myBtn">
                        <button onclick={validateForm}>Login</button>
                        <p id="submit-error"> </p>
                    </div>

                    <div className="signup">
                        New user?<a href="#">sign up</a> <br />
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