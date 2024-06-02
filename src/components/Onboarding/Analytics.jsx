import "./Analytics.css"
import analy from "../../img/analy.png"
import Progress from "./Progress"
import { useNavigate } from "react-router-dom"
import Header from "./Header"

const Analytics = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <div className="analyMain">
                <h2>Get Analytics</h2>
                <p>Gain insights into your Agency growth with detailed reports on sales, requests, profits and customers.</p>
                <img src={analy} alt="" />
                <button onClick={() => navigate("/onboarding/promote")}>Continue</button>
                <Progress position={2} />
            </div>
        </div>
    )
}

export default Analytics