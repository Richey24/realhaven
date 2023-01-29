import "./Fourth.css"
import agent1 from '../../img/agent1.png'
import agent2 from '../../img/agent2.png'
import agent3 from '../../img/agent3.png'
import agent4 from '../../img/agent4.png'
import agent5 from '../../img/agent5.png'
import agent6 from '../../img/agent6.png'
import twitter from "../../img/blue-twitter.svg"
import insta from "../../img/blue-insta.svg"

const arr = [
    {
        name: "Davies Millers",
        position: "C.E.O, Co-founder",
        image: agent1
    },
    {
        name: "Sheila Adeyemi",
        position: "Head of Operations, Co- founder",
        image: agent2
    },
    {
        name: "Jane Carmicheal",
        position: "V.P, Customer relations",
        image: agent3
    },
    {
        name: "Kazeem Ighalo",
        position: "Agent",
        image: agent4
    },
    {
        name: "Wale Peters",
        position: "Agent",
        image: agent5
    },
    {
        name: "Shola Shoretire",
        position: "Agent",
        image: agent6
    },
]

const Fourth = () => {
    return (
        <div className="aFourthMain">
            <h1>Meet the faces of Capital agency</h1>
            <h2>our agents</h2>
            <div>
                {
                    arr.map((person, i) => (
                        <div key={i}>
                            <img src={person.image} alt="" />
                            <div>
                                <p>{person.name}</p>
                                <div>
                                    <img src={twitter} alt="" />
                                    <img style={{ marginLeft: "10px" }} src={insta} alt="" />
                                </div>
                            </div>
                            <p>{person.position}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Fourth