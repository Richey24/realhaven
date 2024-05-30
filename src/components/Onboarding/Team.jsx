import "./Team.css"
import down from "../../img/downarrow.svg"
import { changeBorderColorOnFocus } from "../../utils/styleFunc"
import good from "../../img/goodblack.svg"
import { useState } from "react"
import { showDropDown } from "../../utils/functions"
import { validateEmail } from "../../utils/registerFunctions"
import Progress from "./Progress"
import { useNavigate } from "react-router-dom"
import Header from "./Header"

const Team = () => {
    const navigate = useNavigate()
    const [role, setRole] = useState("owner")
    const [email, setEmail] = useState("")
    const [valid, setValid] = useState(false)

    const getRole = (val) => {
        setRole(val)
        showDropDown("teamRoleDiv")
    }

    const getEmail = (event) => {
        setEmail(event.target.value);
        setValid(validateEmail(event.target.value));
    }

    return (
        <div>
            <Header />
            <div className="onboardTeam">
                <div className="onboardTeamInner">
                    <h4>Invite new team members</h4>
                    <p>Add new team members to your agency workspace. Happy collaboration.</p>
                    <div>
                        <label htmlFor="email">Email</label>
                        <div id="onboardInviteDiv" className="onboardInviteDiv">
                            <input onChange={getEmail} onFocus={() => changeBorderColorOnFocus("onboardInviteDiv", "rgba(46, 125, 215, 1)")} onBlur={() => changeBorderColorOnFocus("onboardInviteDiv", "#E5E7EB")} placeholder="Email, comma separated" name="email" type="email" />
                            <p onClick={() => showDropDown("teamRoleDiv")}>{role} <img src={down} alt="" /></p>
                        </div>
                        <button className={valid ? "validBtn" : ""}>Send invites</button>
                        <div className="teamRoleDiv" id="teamRoleDiv">
                            <p onClick={() => getRole("owner")} className={role === "owner" ? "teamRoleActive" : ""}><div><img src={role === "owner" ? good : ""} alt="" /></div> Owner</p>
                            <p onClick={() => getRole("agent")} className={role === "agent" ? "teamRoleActive" : ""}><div><img src={role === "agent" ? good : ""} alt="" /></div> Agent</p>
                            <p onClick={() => getRole("customer relations")} className={role === "customer relations" ? "teamRoleActive" : ""}><div><img src={role === "customer relations" ? good : ""} alt="" /></div> Customer relations</p>
                            <p onClick={() => getRole("manager")} className={role === "manager" ? "teamRoleActive" : ""}><div><img src={role === "manager" ? good : ""} alt="" /></div> Manager</p>
                            <p onClick={() => getRole("others")} className={role === "others" ? "teamRoleActive" : ""}><div><img src={role === "others" ? good : ""} alt="" /></div> Others</p>
                            <p onClick={() => getRole("prefer not to say")} className={role === "prefer not to say" ? "teamRoleActive" : ""}><div><img src={role === "prefer not to say" ? good : ""} alt="" /></div> Prefer not to say</p>
                        </div>
                    </div>
                    <button onClick={() => navigate("/onboarding/analytics")}>Continue</button>
                </div>
                <Progress position={1} />
            </div>
        </div>
    )
}

export default Team