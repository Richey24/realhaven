import "./StepTwo.css"
import logo from "../../img/logo_blue.svg"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"


const StepTwo = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const mail = state?.mail

    useEffect(() => {
        if (!mail) {
            navigate("/register")
        }
    }, [])

    const checkCode = (e) => {
        e.preventDefault()
        navigate("/register/three")
    }

    return (
        <div className='stepTwoDiv'>
            <div>
                <img src={logo} alt="" />
                <h1>Check your mail</h1>
                <p className="sentMail">We’ve sent a temporary login code to {mail}</p>
                <form className="stepTwoForm" onSubmit={checkCode}>
                    <label htmlFor="email">Enter code</label>
                    <br />
                    <input required placeholder="Enter code" type="text" name="email" id="email" />
                    <button>Continue with Email</button>
                </form>
                <p>Already have an account? <span>Login</span></p>
            </div>
        </div>
    )
}

export default StepTwo