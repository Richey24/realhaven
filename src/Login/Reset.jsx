
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import eye from '../img/Show.svg'
import logo from '../img/logo.svg'
import bg from '../img/Frame 1.png'
import './Login.css'
import { useState } from "react"

const Reset = () => {
    const [spin, setSpin] = useState(false)
    const navigate = useNavigate()

    const showPass = () => {
        const password = document.getElementById('password');
        if (password.type === "password") {
            password.type = "text"
        } else {
            password.type = "password"
        }
    }
    const validateForm = (event) => {
        event.preventDefault()
    }
    const style = {
        fontFamily: "Sora",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
        marginBottom: "8rem"
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
                <div id="theSideMain">
                    <h1>Create a new password</h1>
                    <p style={style}>Your new password must be different from previous used passwords</p>
                    <form onSubmit={validateForm}>
                        <div className="label">
                            <label htmlFor="password">Password</label>
                            <br />
                            <div className='eyeDivLog'>
                                <input id='password' type='password' name="password" />
                                <img className='showPassLog' onClick={showPass} src={eye} alt="" />
                            </div>
                        </div>

                        <div className="myBtn">
                            <button type='submit'>{spin ? (<Spinner animation="border" style={{ color: "white" }} />) : "Reset password"}</button>
                            <p id="submitError" style={{ visibility: "hidden" }}>Must be atleast 8 characters</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reset