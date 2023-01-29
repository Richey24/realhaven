import "./Members.css"
import twitter from "../../img/blue-twitter.svg"
import insta from "../../img/blue-insta.svg"
import agentMember from "../../data/agentMember"


const Members = () => {
    return (
        <div className="aFourthMain">
            <h1>Meet the faces of Capital agency</h1>
            <h2>our agents</h2>
            <div>
                {
                    agentMember.map((person, i) => (
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

export default Members