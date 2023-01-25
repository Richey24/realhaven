import "./BestProperties.css"
import buy from "../../img/buy.png"
import sell from "../../img/sell.png"
import agent from "../../img/agent.png"
import blue from "../../img/blueArrow.svg"
import pink from "../../img/arrowpink.svg"
import grey from "../../img/arrowgrey.svg"

const BestProperties = () => {
    return (
        <div className="mainSecond">
            <h1>Best properties for sale</h1>
            <p>Browse the website’s database to choose a  property that best fit your taste </p>
            <div className="secondInner">
                <div>
                    <img className="secondInnerImg" src={buy} alt="" />
                    <h2>Buy properties</h2>
                    <p>Browse the website’s database to choose a  property that best fit your taste in Nigeria </p>
                    <h4>Discover properties <img src={blue} alt="" /></h4>
                </div>
                <div>
                    <img className="secondInnerImg" src={sell} alt="" />
                    <h2>Sell properties</h2>
                    <p>Put your properties in front of millions of Nigerians and get the best deal in days not months.</p>
                    <h4 style={{ color: "#306584" }}>Sell properties <img src={grey} alt="" /></h4>
                </div>
                <div>
                    <img className="secondInnerImg" src={agent} alt="" />
                    <h2>Become an Agent</h2>
                    <p>Create an account and join us to become an agent. Get all the tools your Real estate agency needs.</p>
                    <h4 style={{ color: "#BF5E65" }}>Join us now <img src={pink} alt="" /></h4>
                </div>
            </div>
        </div>
    )
}

export default BestProperties