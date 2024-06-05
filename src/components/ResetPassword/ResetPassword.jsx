import logo from "../../img/logo_blue.svg"
import back from "../../img/back-arrow.svg"
import { useNavigate } from "react-router-dom"
import "./ReserPassword.css"

const ResetPassword = () => {

    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        navigate("/register/four")
    }


    return (
        <div className="resetMain">
            <p onClick={() => navigate("/")}><img src={logo} alt="" />Haven</p>
            <span onClick={() => navigate("/login")}><img src={back} alt="" />Back to Login</span>
            <div className="resetInner">
                <form onSubmit={submitForm} className="resetDiv">
                    <h2>Forgot Password</h2>
                    <p>Enter your email address and we’ll email you a link to reset your password.</p>
                    <div className="emailDiv">
                        <label htmlFor="email">Email address</label>
                        <br />
                        <input required type="text" id="email" name="email" placeholder="Email address" />
                    </div>
                    <button type="submit">Send link</button>
                    <h5>
                        <p>Help</p>
                        <span>|</span>
                        <p>Terms & Conditions</p>
                        <span>|</span>
                        <p>Privacy Policy</p>
                    </h5>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword