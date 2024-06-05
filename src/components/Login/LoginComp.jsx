import logo from "../../img/logo_blue.svg"
import eye from "../../img/Hide.svg"
import { switchPass } from "../../utils/registerFunctions"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const LoginComp = () => {

    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        navigate("/register/four")
    }

    return (
        <div className="stepThreeMain">
            <p onClick={() => navigate("/")}><img src={logo} alt="" />Haven</p>
            <div className="stepThreeInner">
                <form onSubmit={submitForm} className="stepThreeDiv">
                    <h2>Welcome back to Haven!</h2>
                    <p>Login to your Agency’s workspace</p>
                    <div className="emailDiv">
                        <label htmlFor="email">Email address</label>
                        <br />
                        <input required type="text" id="email" name="email" placeholder="Email address" />
                    </div>
                    <label className="passwordLabel" htmlFor="password">Password</label>
                    <div className="thePassword">
                        <input required placeholder="Password" type="password" id="password" name="password" />
                        <img onClick={() => switchPass("password")} src={eye} alt="" />
                    </div>
                    <h6 style={{ textAlign: "left" }}>Forgot your password? <span onClick={() => navigate("/password/reset")}>Reset it here</span></h6>
                    <button type="submit">Continue</button>
                    <h6>New to Haven? <span onClick={() => navigate("/register")}>Create an account!</span></h6>
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

export default LoginComp