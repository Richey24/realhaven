import "./Promote.css"
import pro from "../../img/promote.png"
import Progress from "./Progress"
import Header from "./Header"

const Promote = () => {
    return (
        <div>
            <Header />
            <div className="proMain">
                <h2>Promote your properties</h2>
                <p>Boosted properties get in front of more eyes by appearing on the main page and other pages on Haven.</p>
                <img src={pro} alt="" />
                <button>Done, Let’s go!</button>
                <Progress position={3} />
            </div>
        </div>
    )
}

export default Promote