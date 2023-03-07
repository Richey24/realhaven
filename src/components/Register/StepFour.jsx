import "./StepFour.css"
import logo from "../../img/logo_blue.svg"

const StepFour = () => {
    return (
        <div className="stepFourMain">
            <div>
                <img src={logo} alt="" />
                <h1>Welcome to Haven</h1>
                <p>Haven makes it easy for you to set up your real estate agency and start selling.</p>
                <button>Get started</button>
            </div>
        </div>
    )
}

export default StepFour