import "./StepThree.css"
import logo from "../../img/logo_blue.svg"
import eye from "../../img/Hide.svg"
import { switchPass } from "../../utils/registerFunctions"
import { useNavigate } from "react-router-dom"

const StepThree = () => {
    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        navigate("/register/four")
    }

    return (
        <div className="stepThreeMain">
            <p><img src={logo} alt="" />Haven</p>
            <div className="stepThreeInner">
                <form onSubmit={submitForm} className="stepThreeDiv">
                    <h2>Complete sign up</h2>
                    <p>Complete your sign up and state growing your agency.</p>
                    <div className="theUserName">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <br />
                            <input required type="text" id="firstName" name="firstName" placeholder="First Name" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <br />
                            <input required type="text" id="lastName" name="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <label className="passwordLabel" htmlFor="password">Password</label>
                    <div className="thePassword">
                        <input required placeholder="Password" type="password" id="password" name="password" />
                        <img onClick={() => switchPass("password")} src={eye} alt="" />
                    </div>
                    <div className="termsAndCon">
                        <input required type="checkbox" id="terms" name="terms" />
                        <label htmlFor="terms">I agree to Haven’s <span>Terms & Conditions</span>  and  <span>Privacy Policy</span></label>
                    </div>
                    <button type="submit">Continue</button>
                    <h6>Already have an account? <span>Login</span></h6>
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

export default StepThree