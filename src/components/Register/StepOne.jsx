import "./StepOne.css"
import logo from "../../img/logo_blue.svg"
import googleLogo from "../../img/google_white.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const StepOne = () => {
    const [hide, setHide] = useState(true)
    const navigate = useNavigate()

    const continueEmail = (e) => {
        e.preventDefault()
        const mail = e.target.email.value
        if (!hide) {
            navigate("/register/two", { state: { mail: mail } })
        } else {
            setHide(false)
        }
    }

    return (
        <div className='registerCompDiv'>
            <div>
                <img src={logo} alt="" />
                <h1>Create your Haven account</h1>
                <button><img src={googleLogo} alt="" /> Continue with Google</button>
                <form onSubmit={continueEmail}>
                    <div hidden={hide} id="regInputDiv" className="regInputDiv">
                        <label htmlFor="email">Email address</label>
                        <br />
                        <input required={!hide} placeholder="Email address" type="email" name="email" id="email" />
                    </div>
                    <button className="continueEmail">Continue with Email</button>
                </form>
                <p>Already have an account? <span>Login</span></p>
                <h6>By signing up, you agree to the Terms of Service and Data Processing Agreement</h6>
            </div>
        </div>
    )
}

export default StepOne