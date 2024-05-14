import "./Promote.css"
import pro from "../../img/promote.png"
import Progress from "./Progress"

const Promote = () => {
    return (
        <div className="proMain">
            <h2>Promote your properties</h2>
            <p>Boosted properties get in front of more eyes by appearing on the main page and other pages on Haven.</p>
            <img src={pro} alt="" />
            <button>Done, Let’s go!</button>
            <Progress position={3} />
        </div>
    )
}

export default Promote