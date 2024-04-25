import "./StepFour.css"
import logo from "../../img/logo_blue.svg"
import { useNavigate } from "react-router-dom"

const StepFour = () => {
    const navigate = useNavigate()

    const moveToOnboard = () => {
        navigate("/onboarding/setup")
    }

    return (
        <div className="stepFourMain">
            <div>
                <img src={logo} alt="" />
                <h1>Welcome to Haven</h1>
                <p>Haven makes it easy for you to set up your real estate agency and start selling.</p>
                <button onClick={moveToOnboard}>Get started</button>
            </div>
        </div>
    )
}

export default StepFour